const express = require('express');
const app = express();
const port = 8000;
const path = require('path');
const fs = require('fs').promises;
const{authenticate} = require('@google-cloud/local-auth');
const {google} = require('googleapis');


const scopes = [
  'https'
]