import express from 'express';
import App from './AppClass.js';
import Controllers from './controllers/Controllers.js';
import ExercisesHistoryController from './controllers/ExercisesHistoryController'
import {UpdateExercises} from './persistence/update/UpdateExercises'
import { createConnection, getConnection, Connection, SimpleConsoleLogger, NoConnectionForRepositoryError } from "typeorm";
import { ExerciseProvider } from './services/ExerciseProvider.js';
import { UpdateRoutines } from './persistence/update/UpdateRoutines.js';

const module2 = require('module');
const fs = require('fs');
module2.Module._extensions['.js'] = function (module: any, filename: any) {
  const contents = fs.readFileSync(filename, 'utf8');
  module._compile(require('fs').readFileSync(filename, 'utf8'), filename);
};


function whenSuccess(){
  // GetSeriesCountToday.run().then(result => {});
  ExercisesHistoryController.getTodaySeriesCount({}).then(result => {
    UpdateExercises.run().then(() => {
      UpdateRoutines.run().then();
    });
  });
}

function connect() {
  createConnection().then(async connection => {
    console.log('connection succeeded');
    whenSuccess();
  }).catch(error => {
    if(error.name == 'AlreadyHasActiveConnectionError') {
      console.log('there is already an active connection');
      whenSuccess();
    } else {
      console.log('connection attempt failed');
      console.log(error.name);
      connect();
    }
  });
}

connect();

const app = express();
const port = 3000;
App.initialize(app);

Controllers.registerControllers();
App.express().listen(port, () => {
  return console.log(`server is listening on ${port}`);
});

