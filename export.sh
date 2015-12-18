#!/bin/bash
SERVER_TYPE="staging"

if [ $# -ne 1 ];
then
  SERVER_TYPE="staging"
else
  SERVER_TYPE=$1
fi

# cd src


if [ "$SERVER_TYPE" = "staging" ];
then
  echo "Importing Humanity 360 on Staging"
  sshpass -e ssh ${UN_STAGING} "mkdir ${UN_STAGING_DIR}/2015_year_in_review"
  sshpass -e scp -rv src/* ${UN_STAGING}:${UN_STAGING_DIR}/2015_year_in_review
  sshpass -e ssh ${UN_STAGING} "touch ${UN_STAGING_DIR}/2015_year_in_review/index.html"

  # echo "Importing HE Study Flipbook on Staging"
  # sshpass -e scp -rv he-flipbook/* ${UN_STAGING}/he-study-2015

  # echo "Importing WHDT 2015 Flipbook on Staging"
  # sshpass -e scp -rv whdt-flipbook/* ${UN_STAGING}/data-and-trends-2015
fi

if [ "$SERVER_TYPE" = "prod" ];
then
  echo "Importing Humanity 360 on PROD"
  sshpass -e ssh ${UN_PROD1} "mkdir ${UN_PROD_DIR}/2015_year_in_review"
  sshpass -e scp -rv src/* ${UN_PROD1}:${UN_PROD_DIR}/2015_year_in_review
  sshpass -e ssh ${UN_PROD1} "touch ${UN_PROD_DIR}/2015_year_in_review/index.html"


  sshpass -e ssh ${UN_PROD2} "mkdir ${UN_PROD_DIR}/2015_year_in_review"
  sshpass -e scp -rv src/* ${UN_PROD2}:${UN_PROD_DIR}/2015_year_in_review
  sshpass -e ssh ${UN_PROD2} "touch ${UN_PROD_DIR}/stateofaid/index.html"

fi

