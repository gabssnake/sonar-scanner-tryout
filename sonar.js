"use strict";

require('dotenv').config();
const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl : 'https://sonarcloud.io/',
    token : process.env.SONAR_TOKEN,
    options: {
      'sonar.projectName': 'gabssnake_sonar-scanner-tryout',
      'sonar.organization': 'gabssnake',
      'sonar.sources': './src',
      'sonar.tests': './test'
    }
  },
  () => process.exit()
)
