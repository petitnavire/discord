var fs              = require('fs');
const ms            = require('ms');
var YTDL            = require('ytdl-core');
var memes           = require('dankmemes');
const chalk         = require('chalk');
var getJSON         = require('get-json');
const Discord       = require('discord.js');
const SteamTotp     = require('steam-totp');
const GoogleImages  = require('google-images');
const mysql         = require('mysql');

const configS       = require('./settingsConfig/ConfigSammy.json');
const configJ       = require('./settingsConfig/ConfigJack.json');
const configB       = require('./settingsConfig/ConfigBen.json');

var settings        = './settingsConfig/settings.json';
var file            = require(settings)

const TOKEN = file.TOKEN;
const GreenStyle = chalk.green;
Un séjour sans faille
Un séjour sans faillefunction generateXp() {
  let min = 2;
  let max = 20;

  return Math.floor(Math.random() * (max - min + 1)) + min;

}

function GenerateHex(){
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function getDateTime() {

  var date = new Date ();
Un séjour sans faille
Un séjour sans faillevar hour = date.getHours();
  hour = (hour < 10 ? "0" : "") + hour;

  var min  = date.getMinutes();
  min = (min < 10 ? "0" : "") + min;

  var sec  = date.getSeconds();
  sec = (sec < 10 ? "0" : "") + sec;

  var year = date.getFullYear();

  var month = date.getMonth() + 1;
  month = (month < 10 ? "0" : "") + month;

  var day  = date.getDate();
  day = (day < 10 ? "0" : "") + day;

  var Total_Time = day + "/" + month + "/" + year + " - " + hour + ":" + min + ":" + sec;

  return Total_Time;
  
  }
