import * as d3 from 'd3'
var RadarChart = {
  draw: function (id, d, options) {
    let cfg = {
      radius: 5,
      w: 500,
      h: 500,
      factor: 1,
      factorLegend: 0.85,
      levels: 10,
      maxValue: 100,
      radians: 2 * Math.PI,
      opacityArea: 0.5,
      ToRight: 5,
      // TranslateX: 80,
      // TranslateY: 40,
      ExtraWidthX: 100,
      ExtraWidthY: 100,
      color: d3.scaleOrdinal().range(["#6F257F", "#CA0D59"])
    }
    if (typeof options !== 'undefined') {
      for (var i in options) {
        if (typeof options[i] !== 'undefined') {
          cfg[i] = options[i]
        }
      }
    }

    let allAxis = (d[0].map((i, j) => { return i.area }))
    console.log(allAxis)
    let total = allAxis.length
    let radius = cfg.factor * Math.min(cfg.w / 2, cfg.h / 2)

    // reset all SVG
    d3.select(id).select("svg").remove()
    // create SVG container
    let g = d3.select(id)
      .append("svg")
      .attr("width", cfg.w + cfg.ExtraWidthX)
      .attr("height", cfg.h + cfg.ExtraWidthY)
      .append("g")
      .attr('class', '.grids')
      .attr("transform", "translate(" + cfg.ExtraWidthX / 2 + "," + cfg.ExtraWidthY / 2 + ")")
    // Circular segments
    for (let j = 0; j < cfg.levels; j++) {
      let levelFactor = cfg.factor * radius * ((j + 1) / cfg.levels)
      console.log(`levelFactor: ${levelFactor}`)
      g.selectAll(".grids")
        .data(allAxis)
        .enter()
        .append("svg:line")
        .attr("x1", function (d, i) {
          return levelFactor * (1 - cfg.factor * Math.sin(i * cfg.radians / total))
        })
        .attr("y1", function (d, i) {
          return levelFactor * (1 - cfg.factor * Math.cos(i * cfg.radians / total))
        })
        .attr("x2", function (d, i) {
          return levelFactor * (1 - cfg.factor * Math.sin((i + 1) * cfg.radians / total))
        })
        .attr("y2", function (d, i) {
          return levelFactor * (1 - cfg.factor * Math.cos((i + 1) * cfg.radians / total))
        })
        .attr("class", "line")
        .style("stroke", "grey")
        .style("stroke-opacity", "0.75")
        .style("stroke-width", "1px")
        .attr("transform", "translate(" + (cfg.w / 2 - levelFactor) + ", " + (cfg.h / 2 - levelFactor) + ")")
    }
    console.log(g.selectAll('.levels'))
    // Text indicating at what % each level is
    for (let j = 0; j < cfg.levels; j++) {
      let levelFactor = cfg.factor * radius * ((j + 1) / cfg.levels)
      g.selectAll(".grids")
        .data([0]) // dummy data
        .enter()
        .append("svg:text")
        .attr("x", function (d) {
          return levelFactor * (1 - cfg.factor * Math.sin(0))
        })
        .attr("y", function (d) {
          return levelFactor * (1 - cfg.factor * Math.cos(0))
        })
        .attr("class", "levels")
        .attr("transform", "translate(" + (cfg.w / 2 - levelFactor + cfg.ToRight) + ", " + (cfg.h / 2 - levelFactor) + ")")
        .attr("fill", "#737373")
        .text((j + 1) * 100 / cfg.levels)
    }

    var axis = g.selectAll(".axis")
      .data(allAxis)
      .enter()
      .append("g")
      .attr("class", "axis")

    axis.append("line")
      .attr("x1", cfg.w / 2)
      .attr("y1", cfg.h / 2)
      .attr("x2", function (d, i) {
        return cfg.w / 2 * (1 - cfg.factor * Math.sin(i * cfg.radians / total))
      })
      .attr("y2", function (d, i) {
        return cfg.h / 2 * (1 - cfg.factor * Math.cos(i * cfg.radians / total))
      })
      .attr("class", "line")
      .style("stroke", "grey")
      .style("stroke-width", "1px")

    axis.append("text")
      .attr("class", "legend")
      .text(function (d) { return d })
      .style("font-family", "sans-serif")
      .style("font-size", "16px")
      .attr("text-anchor", "middle")
      .attr("dy", "1.5em")
      .attr("transform", function (d, i) {
        return "translate(0, -20)"
      })
      .attr("x", function (d, i) {
        return cfg.w / 2 * (1 - cfg.factorLegend * Math.sin(i * cfg.radians / total)) - 60 * Math.sin(i * cfg.radians / total)
      })
      .attr("y", function (d, i) {
        return cfg.h / 2 * (1 - Math.cos(i * cfg.radians / total)) - 20 * Math.cos(i * cfg.radians / total)
      })
    let series = 0
    d.forEach(function (y, x) {
      let dataValues = []
      g.selectAll(".nodes")
        .data(y, function (j, i) {
          dataValues.push([
            cfg.w / 2 * (1 - (parseFloat(Math.max(j.value, 0)) / cfg.maxValue) * cfg.factor * Math.sin(i * cfg.radians / total)),
            cfg.h / 2 * (1 - (parseFloat(Math.max(j.value, 0)) / cfg.maxValue) * cfg.factor * Math.cos(i * cfg.radians / total))
          ])
        })
      dataValues.push(dataValues[0])
      g.selectAll(".area")
        .data([dataValues])
        .enter()
        .append("polygon")
        .attr("class", "radar-chart-serie" + series)
        .style("stroke-width", "2px")
        .style("stroke", cfg.color(series))
        .attr("points", function (d) {
          var str = ""
          for (var pti = 0; pti < d.length; pti++) {
            str = str + d[pti][0] + "," + d[pti][1] + " "
          }
          return str
        })
        .style("fill", function (j, i) { return cfg.color(series) })
        .style("fill-opacity", cfg.opacityArea)
        .on('mouseover', function (d) {
          let z = "polygon." + d3.select(this).attr("class")
          let r = "circle." + d3.select(this).attr("class")
          g.selectAll("polygon")
            .transition(200)
            .style("fill-opacity", 0.3)
            .style("stroke-width", 0)
            .style("z-index", 100)
          g.selectAll("circle")
            .transition(200)
            .style('opacity', 0.3)
          g.selectAll(z)
            .transition(200)
            .style("fill-opacity", 0.8)
            .style("stroke-width", '2px')
          g.selectAll(r)
            .transition(200)
            .style('opacity', 1)
        })
        .on('mouseout', function () {
          g.selectAll("polygon")
            .transition(200)
            .style("fill-opacity", cfg.opacityArea)
            .style("stroke-width", '2px')
          g.selectAll("circle")
            .transition(200)
            .style('opacity', 1)
        })
      series++
    })
    series = 0
    // draw circle marker
    d.forEach(function (y, x) {
      let dataValues = []
      g.selectAll(".nodes")
        .data(y).enter()
        .append("svg:circle")
        .attr("class", "radar-chart-serie" + series)
        .attr('r', cfg.radius)
        .attr("alt", function (j) { return Math.max(j.value, 0) })
        .attr("cx", function (j, i) {
          dataValues.push([
            cfg.w / 2 * (1 - (parseFloat(Math.max(j.value, 0)) / cfg.maxValue) * cfg.factor * Math.sin(i * cfg.radians / total)),
            cfg.h / 2 * (1 - (parseFloat(Math.max(j.value, 0)) / cfg.maxValue) * cfg.factor * Math.cos(i * cfg.radians / total))
          ])
          return cfg.w / 2 * (1 - (Math.max(j.value, 0) / cfg.maxValue) * cfg.factor * Math.sin(i * cfg.radians / total))
        })
        .attr("cy", function (j, i) {
          return cfg.h / 2 * (1 - (Math.max(j.value, 0) / cfg.maxValue) * cfg.factor * Math.cos(i * cfg.radians / total))
        })
        .attr("data-id", function (j) { return j.area })
        .style("fill", "#fff")
        .style("stroke-width", "2px")
        .style("stroke", cfg.color(series))
        .style("fill-opacity", 0.9)
        .on('mouseover', function (d) {
          console.log(d.area)
        })
        .on("mouseout", function (d) {
          console.log(d)
        })
      series++
    })
  }
}
export default RadarChart
