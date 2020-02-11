arr=($(ls -d */))

for i in ${arr[@]}
do
   if [ "$i" = "resilientcity/" ] || [ "$i" == "resilientcity_fault/" ] || [ "$i" == "resilientcity_response/" ]
   then
        cd $i;npm run build;cd ..;
   fi
done
