/************************** 
 * Discounting_Block Test *
 **************************/

import { PsychoJS } from './lib/core-2021.1.2.js';
import * as core from './lib/core-2021.1.2.js';
import { TrialHandler } from './lib/data-2021.1.2.js';
import { Scheduler } from './lib/util-2021.1.2.js';
import * as visual from './lib/visual-2021.1.2.js';
import * as sound from './lib/sound-2021.1.2.js';
import * as util from './lib/util-2021.1.2.js';
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'discounting_block';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// Start code blocks for 'Before Experiment'
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(languageRoutineBegin());
flowScheduler.add(languageRoutineEachFrame());
flowScheduler.add(languageRoutineEnd());
flowScheduler.add(Instruction_2RoutineBegin());
flowScheduler.add(Instruction_2RoutineEachFrame());
flowScheduler.add(Instruction_2RoutineEnd());
const discountingBlockLongLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(discountingBlockLongLoopBegin, discountingBlockLongLoopScheduler);
flowScheduler.add(discountingBlockLongLoopScheduler);
flowScheduler.add(discountingBlockLongLoopEnd);
flowScheduler.add(endScreenRoutineBegin());
flowScheduler.add(endScreenRoutineEachFrame());
flowScheduler.add(endScreenRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.1.2';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var languageClock;
var lan_choose;
var language_text;
var text1;
var text2;
var text3;
var text4;
var text6;
var text7;
var text8;
var text9;
var text10;
var text11;
var textopt1;
var textopt2;
var textchance0;
var textchance1;
var Instruction_2Clock;
var Intro_1;
var intro_1_ending;
var InitializationClock;
var begininbetweenClock;
var text_6;
var fixFramedClock;
var fixImg;
var text_13;
var inBetweenClock;
var text_14;
var delayFramedClock;
var delayImg;
var text_130;
var intro4chooseClock;
var text_2;
var bb;
var key_resp_3;
var choiceScreenClock;
var choiceImg;
var choiceResp;
var choiceWarning;
var intro;
var total;
var block;
var nk;
var short_reward;
var short_delay;
var long_reward;
var long_delay;
var h;
var n;
var a;
var to_choose;
var choiceLeftClock;
var leftImg;
var feedbackLeftClock;
var rewardImgLeft;
var rewardText;
var choiceRightClock;
var rightImg;
var feedbackRightClock;
var rewardImgRight;
var rightText;
var repeatScreenClock;
var block4;
var block3;
var block2;
var block1;
var repeatText;
var repeatResp;
var tl;
var Block_screenClock;
var text;
var key_resp;
var ending_text;
var endScreenClock;
var endText;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "language"
  languageClock = new util.Clock();
  lan_choose = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  language_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'language_text',
    text: 'Добро пожаловать, уважаемый участник!\nWelcome dear participant!\n\nДля русскоязычной версии нажмите "1"\nFor English language press "2"',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  if ((lan_choose.keys === "1")) {
      text1 = 1;
      text2 = 2;
      text3 = 3;
      text4 = 4;
      text6 = 5;
      text7 = "total gain:";
      text8 = "You are in level";
      text9 = "press space to continue";
      text10 = 6;
      text11 = 7;
      textopt1 = "for 67%";
      textopt2 = "for 100%";
      textchance0 = "You did not get it!";
      textchance1 = "You got it!";
  } else {
      text1 = "Welcome dear participants\n\nThis game is about collecting as much M&Ms as you can!\n\nEach time you must choose from two options with different probability and waiting time. The exact amount and probability for each option is written on the screen.\n\nEven if you are confused now, take it easy and try to play. It will get to you.\n\nPress 'space' to play it a bit for yourself..";
      text2 = "Please wait, you are expriencing the waiting duration!";
      text3 = "You had exprienced the waiting duration!\n\nPlease press 'space' to start choosing again.";
      text4 = "(to choose this option press 1)            (To choose this option press 2)";
      text6 = "You saw how easy it was?! \n\n Have you noticed the amount of waiting duration that was different for small and large M&Ms? \n\n Their waiting duration will be presented at the beginning of the each 4 blocks of the game. \n\n You should know that you cannot increase the number of rounds by choosing the faster rewards. \n\n One more thing, for every 200 points you earn one hidden reward!  \n\n Press space to play the game for real!";
      text7 = "\n \ntotal gain:";
      text8 = "\n \nYou are in level";
      text9 = "\n \npress space to continue";
      text10 = "This block has ended. \n \nTo start and experience the waiting duration for the next block, press space.";
      text11 = "The experiment is finished\n                 Thank you!";
      text12 = "Waiting duration for shorter reward...";
      text13 = "Please wait, you are expriencing the waiting duration!";
      text14 = "Waiting duration for larger reward...";
      textopt1 = "  for 67%";
      textopt2 = "  for 100%";
      textchance0 = "You did not get it!";
      textchance1 = "You got it!";
  }
  
  // Initialize components for Routine "Instruction_2"
  Instruction_2Clock = new util.Clock();
  Intro_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Intro_1',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  intro_1_ending = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Initialization"
  InitializationClock = new util.Clock();
  // Initialize components for Routine "begininbetween"
  begininbetweenClock = new util.Clock();
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "fixFramed"
  fixFramedClock = new util.Clock();
  fixImg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'fixImg', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [1.8, 1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  text_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_13',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('red'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "inBetween"
  inBetweenClock = new util.Clock();
  text_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_14',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "delayFramed"
  delayFramedClock = new util.Clock();
  delayImg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'delayImg', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [1.8, 1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  text_130 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_130',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('red'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "intro4choose"
  intro4chooseClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  bb = 1;
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "choiceScreen"
  choiceScreenClock = new util.Clock();
  choiceImg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'choiceImg', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [1.8, 1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  choiceResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  choiceWarning = new visual.TextStim({
    win: psychoJS.window,
    name: 'choiceWarning',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('red'),  opacity: 1,
    depth: -2.0 
  });
  
  intro = 0;
  bb = 0;
  total = 0;
  block = 0;
  nk = 0;
  short_reward = [16, 16, 16, 16, 16];
  short_delay = [1, 1, 1, 1, 1];
  long_reward = [32, 32, 32, 32, 32];
  long_delay = [3, 1, 15, 30, 7];
  h = "start";
  n = 0;
  a = [0, 0, 0, 0];
  
  to_choose = new visual.TextStim({
    win: psychoJS.window,
    name: 'to_choose',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('red'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "choiceLeft"
  choiceLeftClock = new util.Clock();
  leftImg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'leftImg', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [1.8, 1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "feedbackLeft"
  feedbackLeftClock = new util.Clock();
  rewardImgLeft = new visual.ImageStim({
    win : psychoJS.window,
    name : 'rewardImgLeft', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [1.8, 1],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  rewardText = new visual.TextStim({
    win: psychoJS.window,
    name: 'rewardText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('red'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "choiceRight"
  choiceRightClock = new util.Clock();
  rightImg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'rightImg', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [1.8, 1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "feedbackRight"
  feedbackRightClock = new util.Clock();
  rewardImgRight = new visual.ImageStim({
    win : psychoJS.window,
    name : 'rewardImgRight', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [1.8, 1],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  rightText = new visual.TextStim({
    win: psychoJS.window,
    name: 'rightText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('red'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "repeatScreen"
  repeatScreenClock = new util.Clock();
  block4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'block4', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0.5, (- 0.2)], size : [0.35, 0.35],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  block3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'block3', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0.5, 0.2], size : [0.35, 0.35],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  block2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'block2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.5), (- 0.2)], size : [0.35, 0.35],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  block1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'block1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.5), 0.2], size : [0.35, 0.35],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  repeatText = new visual.TextStim({
    win: psychoJS.window,
    name: 'repeatText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  repeatResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  tl = [0, 0, 0, 0];
  
  // Initialize components for Routine "Block_screen"
  Block_screenClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  ending_text = text6;
  
  // Initialize components for Routine "endScreen"
  endScreenClock = new util.Clock();
  endText = new visual.TextStim({
    win: psychoJS.window,
    name: 'endText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _lan_choose_allKeys;
var languageComponents;
function languageRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'language'-------
    t = 0;
    languageClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    lan_choose.keys = undefined;
    lan_choose.rt = undefined;
    _lan_choose_allKeys = [];
    // keep track of which components have finished
    languageComponents = [];
    languageComponents.push(lan_choose);
    languageComponents.push(language_text);
    
    for (const thisComponent of languageComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function languageRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'language'-------
    // get current time
    t = languageClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *lan_choose* updates
    if (t >= 0.0 && lan_choose.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      lan_choose.tStart = t;  // (not accounting for frame time here)
      lan_choose.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { lan_choose.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { lan_choose.start(); }); // start on screen flip
    }

    if (lan_choose.status === PsychoJS.Status.STARTED) {
      let theseKeys = lan_choose.getKeys({keyList: ['1', '2'], waitRelease: false});
      _lan_choose_allKeys = _lan_choose_allKeys.concat(theseKeys);
      if (_lan_choose_allKeys.length > 0) {
        lan_choose.keys = _lan_choose_allKeys[_lan_choose_allKeys.length - 1].name;  // just the last key pressed
        lan_choose.rt = _lan_choose_allKeys[_lan_choose_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *language_text* updates
    if (t >= 0.0 && language_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      language_text.tStart = t;  // (not accounting for frame time here)
      language_text.frameNStart = frameN;  // exact frame index
      
      language_text.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of languageComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function languageRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'language'-------
    for (const thisComponent of languageComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('lan_choose.keys', lan_choose.keys);
    if (typeof lan_choose.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('lan_choose.rt', lan_choose.rt);
        routineTimer.reset();
        }
    
    lan_choose.stop();
    /* Syntax Error: Fix Python code */
    // the Routine "language" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _intro_1_ending_allKeys;
var Instruction_2Components;
function Instruction_2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Instruction_2'-------
    t = 0;
    Instruction_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Intro_1.setText(text1);
    intro_1_ending.keys = undefined;
    intro_1_ending.rt = undefined;
    _intro_1_ending_allKeys = [];
    // keep track of which components have finished
    Instruction_2Components = [];
    Instruction_2Components.push(Intro_1);
    Instruction_2Components.push(intro_1_ending);
    
    for (const thisComponent of Instruction_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instruction_2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Instruction_2'-------
    // get current time
    t = Instruction_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Intro_1* updates
    if (t >= 0.0 && Intro_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Intro_1.tStart = t;  // (not accounting for frame time here)
      Intro_1.frameNStart = frameN;  // exact frame index
      
      Intro_1.setAutoDraw(true);
    }

    
    // *intro_1_ending* updates
    if (t >= 0.0 && intro_1_ending.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_1_ending.tStart = t;  // (not accounting for frame time here)
      intro_1_ending.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { intro_1_ending.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { intro_1_ending.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { intro_1_ending.clearEvents(); });
    }

    if (intro_1_ending.status === PsychoJS.Status.STARTED) {
      let theseKeys = intro_1_ending.getKeys({keyList: ['space'], waitRelease: false});
      _intro_1_ending_allKeys = _intro_1_ending_allKeys.concat(theseKeys);
      if (_intro_1_ending_allKeys.length > 0) {
        intro_1_ending.keys = _intro_1_ending_allKeys[_intro_1_ending_allKeys.length - 1].name;  // just the last key pressed
        intro_1_ending.rt = _intro_1_ending_allKeys[_intro_1_ending_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instruction_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instruction_2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Instruction_2'-------
    for (const thisComponent of Instruction_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('intro_1_ending.keys', intro_1_ending.keys);
    if (typeof intro_1_ending.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('intro_1_ending.rt', intro_1_ending.rt);
        routineTimer.reset();
        }
    
    intro_1_ending.stop();
    // the Routine "Instruction_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var discountingBlockLong;
var currentLoop;
function discountingBlockLongLoopBegin(discountingBlockLongLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  discountingBlockLong = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 200, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'discountingBlockLong'
  });
  psychoJS.experiment.addLoop(discountingBlockLong); // add the loop to the experiment
  currentLoop = discountingBlockLong;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisDiscountingBlockLong of discountingBlockLong) {
    const snapshot = discountingBlockLong.getSnapshot();
    discountingBlockLongLoopScheduler.add(importConditions(snapshot));
    discountingBlockLongLoopScheduler.add(InitializationRoutineBegin(snapshot));
    discountingBlockLongLoopScheduler.add(InitializationRoutineEachFrame(snapshot));
    discountingBlockLongLoopScheduler.add(InitializationRoutineEnd(snapshot));
    const blockbegin4LoopScheduler = new Scheduler(psychoJS);
    discountingBlockLongLoopScheduler.add(blockbegin4LoopBegin, blockbegin4LoopScheduler);
    discountingBlockLongLoopScheduler.add(blockbegin4LoopScheduler);
    discountingBlockLongLoopScheduler.add(blockbegin4LoopEnd);
    const blockbegin1LoopScheduler = new Scheduler(psychoJS);
    discountingBlockLongLoopScheduler.add(blockbegin1LoopBegin, blockbegin1LoopScheduler);
    discountingBlockLongLoopScheduler.add(blockbegin1LoopScheduler);
    discountingBlockLongLoopScheduler.add(blockbegin1LoopEnd);
    const blockbegin3LoopScheduler = new Scheduler(psychoJS);
    discountingBlockLongLoopScheduler.add(blockbegin3LoopBegin, blockbegin3LoopScheduler);
    discountingBlockLongLoopScheduler.add(blockbegin3LoopScheduler);
    discountingBlockLongLoopScheduler.add(blockbegin3LoopEnd);
    const blockbegin0LoopScheduler = new Scheduler(psychoJS);
    discountingBlockLongLoopScheduler.add(blockbegin0LoopBegin, blockbegin0LoopScheduler);
    discountingBlockLongLoopScheduler.add(blockbegin0LoopScheduler);
    discountingBlockLongLoopScheduler.add(blockbegin0LoopEnd);
    const blockbegin2LoopScheduler = new Scheduler(psychoJS);
    discountingBlockLongLoopScheduler.add(blockbegin2LoopBegin, blockbegin2LoopScheduler);
    discountingBlockLongLoopScheduler.add(blockbegin2LoopScheduler);
    discountingBlockLongLoopScheduler.add(blockbegin2LoopEnd);
    discountingBlockLongLoopScheduler.add(choiceScreenRoutineBegin(snapshot));
    discountingBlockLongLoopScheduler.add(choiceScreenRoutineEachFrame(snapshot));
    discountingBlockLongLoopScheduler.add(choiceScreenRoutineEnd(snapshot));
    const choiceLeftLoopLoopScheduler = new Scheduler(psychoJS);
    discountingBlockLongLoopScheduler.add(choiceLeftLoopLoopBegin, choiceLeftLoopLoopScheduler);
    discountingBlockLongLoopScheduler.add(choiceLeftLoopLoopScheduler);
    discountingBlockLongLoopScheduler.add(choiceLeftLoopLoopEnd);
    const choiceRightLoopLoopScheduler = new Scheduler(psychoJS);
    discountingBlockLongLoopScheduler.add(choiceRightLoopLoopBegin, choiceRightLoopLoopScheduler);
    discountingBlockLongLoopScheduler.add(choiceRightLoopLoopScheduler);
    discountingBlockLongLoopScheduler.add(choiceRightLoopLoopEnd);
    discountingBlockLongLoopScheduler.add(repeatScreenRoutineBegin(snapshot));
    discountingBlockLongLoopScheduler.add(repeatScreenRoutineEachFrame(snapshot));
    discountingBlockLongLoopScheduler.add(repeatScreenRoutineEnd(snapshot));
    const trialsLoopScheduler = new Scheduler(psychoJS);
    discountingBlockLongLoopScheduler.add(trialsLoopBegin, trialsLoopScheduler);
    discountingBlockLongLoopScheduler.add(trialsLoopScheduler);
    discountingBlockLongLoopScheduler.add(trialsLoopEnd);
    discountingBlockLongLoopScheduler.add(endLoopIteration(discountingBlockLongLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var blockbegin4;
function blockbegin4LoopBegin(blockbegin4LoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  blockbegin4 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: bb, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'blockbegin4'
  });
  psychoJS.experiment.addLoop(blockbegin4); // add the loop to the experiment
  currentLoop = blockbegin4;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisBlockbegin4 of blockbegin4) {
    const snapshot = blockbegin4.getSnapshot();
    blockbegin4LoopScheduler.add(importConditions(snapshot));
    blockbegin4LoopScheduler.add(begininbetweenRoutineBegin(snapshot));
    blockbegin4LoopScheduler.add(begininbetweenRoutineEachFrame(snapshot));
    blockbegin4LoopScheduler.add(begininbetweenRoutineEnd(snapshot));
    blockbegin4LoopScheduler.add(endLoopIteration(blockbegin4LoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function blockbegin4LoopEnd() {
  psychoJS.experiment.removeLoop(blockbegin4);

  return Scheduler.Event.NEXT;
}


var blockbegin1;
function blockbegin1LoopBegin(blockbegin1LoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  blockbegin1 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: bb, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'blockbegin1'
  });
  psychoJS.experiment.addLoop(blockbegin1); // add the loop to the experiment
  currentLoop = blockbegin1;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisBlockbegin1 of blockbegin1) {
    const snapshot = blockbegin1.getSnapshot();
    blockbegin1LoopScheduler.add(importConditions(snapshot));
    blockbegin1LoopScheduler.add(fixFramedRoutineBegin(snapshot));
    blockbegin1LoopScheduler.add(fixFramedRoutineEachFrame(snapshot));
    blockbegin1LoopScheduler.add(fixFramedRoutineEnd(snapshot));
    blockbegin1LoopScheduler.add(endLoopIteration(blockbegin1LoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function blockbegin1LoopEnd() {
  psychoJS.experiment.removeLoop(blockbegin1);

  return Scheduler.Event.NEXT;
}


var blockbegin3;
function blockbegin3LoopBegin(blockbegin3LoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  blockbegin3 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: bb, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'blockbegin3'
  });
  psychoJS.experiment.addLoop(blockbegin3); // add the loop to the experiment
  currentLoop = blockbegin3;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisBlockbegin3 of blockbegin3) {
    const snapshot = blockbegin3.getSnapshot();
    blockbegin3LoopScheduler.add(importConditions(snapshot));
    blockbegin3LoopScheduler.add(inBetweenRoutineBegin(snapshot));
    blockbegin3LoopScheduler.add(inBetweenRoutineEachFrame(snapshot));
    blockbegin3LoopScheduler.add(inBetweenRoutineEnd(snapshot));
    blockbegin3LoopScheduler.add(endLoopIteration(blockbegin3LoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function blockbegin3LoopEnd() {
  psychoJS.experiment.removeLoop(blockbegin3);

  return Scheduler.Event.NEXT;
}


var blockbegin0;
function blockbegin0LoopBegin(blockbegin0LoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  blockbegin0 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: bb, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'blockbegin0'
  });
  psychoJS.experiment.addLoop(blockbegin0); // add the loop to the experiment
  currentLoop = blockbegin0;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisBlockbegin0 of blockbegin0) {
    const snapshot = blockbegin0.getSnapshot();
    blockbegin0LoopScheduler.add(importConditions(snapshot));
    blockbegin0LoopScheduler.add(delayFramedRoutineBegin(snapshot));
    blockbegin0LoopScheduler.add(delayFramedRoutineEachFrame(snapshot));
    blockbegin0LoopScheduler.add(delayFramedRoutineEnd(snapshot));
    blockbegin0LoopScheduler.add(endLoopIteration(blockbegin0LoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function blockbegin0LoopEnd() {
  psychoJS.experiment.removeLoop(blockbegin0);

  return Scheduler.Event.NEXT;
}


var blockbegin2;
function blockbegin2LoopBegin(blockbegin2LoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  blockbegin2 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: bb, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'blockbegin2'
  });
  psychoJS.experiment.addLoop(blockbegin2); // add the loop to the experiment
  currentLoop = blockbegin2;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisBlockbegin2 of blockbegin2) {
    const snapshot = blockbegin2.getSnapshot();
    blockbegin2LoopScheduler.add(importConditions(snapshot));
    blockbegin2LoopScheduler.add(intro4chooseRoutineBegin(snapshot));
    blockbegin2LoopScheduler.add(intro4chooseRoutineEachFrame(snapshot));
    blockbegin2LoopScheduler.add(intro4chooseRoutineEnd(snapshot));
    blockbegin2LoopScheduler.add(endLoopIteration(blockbegin2LoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function blockbegin2LoopEnd() {
  psychoJS.experiment.removeLoop(blockbegin2);

  return Scheduler.Event.NEXT;
}


var choiceLeftLoop;
function choiceLeftLoopLoopBegin(choiceLeftLoopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  choiceLeftLoop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: left, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'choiceLeftLoop'
  });
  psychoJS.experiment.addLoop(choiceLeftLoop); // add the loop to the experiment
  currentLoop = choiceLeftLoop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisChoiceLeftLoop of choiceLeftLoop) {
    const snapshot = choiceLeftLoop.getSnapshot();
    choiceLeftLoopLoopScheduler.add(importConditions(snapshot));
    choiceLeftLoopLoopScheduler.add(choiceLeftRoutineBegin(snapshot));
    choiceLeftLoopLoopScheduler.add(choiceLeftRoutineEachFrame(snapshot));
    choiceLeftLoopLoopScheduler.add(choiceLeftRoutineEnd(snapshot));
    choiceLeftLoopLoopScheduler.add(feedbackLeftRoutineBegin(snapshot));
    choiceLeftLoopLoopScheduler.add(feedbackLeftRoutineEachFrame(snapshot));
    choiceLeftLoopLoopScheduler.add(feedbackLeftRoutineEnd(snapshot));
    choiceLeftLoopLoopScheduler.add(endLoopIteration(choiceLeftLoopLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function choiceLeftLoopLoopEnd() {
  psychoJS.experiment.removeLoop(choiceLeftLoop);

  return Scheduler.Event.NEXT;
}


var choiceRightLoop;
function choiceRightLoopLoopBegin(choiceRightLoopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  choiceRightLoop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: right, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'choiceRightLoop'
  });
  psychoJS.experiment.addLoop(choiceRightLoop); // add the loop to the experiment
  currentLoop = choiceRightLoop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisChoiceRightLoop of choiceRightLoop) {
    const snapshot = choiceRightLoop.getSnapshot();
    choiceRightLoopLoopScheduler.add(importConditions(snapshot));
    choiceRightLoopLoopScheduler.add(choiceRightRoutineBegin(snapshot));
    choiceRightLoopLoopScheduler.add(choiceRightRoutineEachFrame(snapshot));
    choiceRightLoopLoopScheduler.add(choiceRightRoutineEnd(snapshot));
    choiceRightLoopLoopScheduler.add(feedbackRightRoutineBegin(snapshot));
    choiceRightLoopLoopScheduler.add(feedbackRightRoutineEachFrame(snapshot));
    choiceRightLoopLoopScheduler.add(feedbackRightRoutineEnd(snapshot));
    choiceRightLoopLoopScheduler.add(endLoopIteration(choiceRightLoopLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function choiceRightLoopLoopEnd() {
  psychoJS.experiment.removeLoop(choiceRightLoop);

  return Scheduler.Event.NEXT;
}


var trials;
function trialsLoopBegin(trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: block_screen, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    const snapshot = trials.getSnapshot();
    trialsLoopScheduler.add(importConditions(snapshot));
    trialsLoopScheduler.add(Block_screenRoutineBegin(snapshot));
    trialsLoopScheduler.add(Block_screenRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(Block_screenRoutineEnd(snapshot));
    trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


function discountingBlockLongLoopEnd() {
  psychoJS.experiment.removeLoop(discountingBlockLong);

  return Scheduler.Event.NEXT;
}


var chance;
var tx;
var chanceLeft;
var chanceRight;
var transparencyRight;
var transparencyLeft;
var fixedImage;
var delayImage;
var choiceImage;
var choiceImageLeft;
var choiceImageRight;
var rewardImageLeft;
var rewardImageRight;
var rewardLeft;
var rewardRight;
var block_screen;
var InitializationComponents;
function InitializationRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Initialization'-------
    t = 0;
    InitializationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    chance = [textchance1, textchance0, textchance1, textchance0, textchance1, textchance1, textchance0, textchance1, textchance1];
    if (((n % 2) === 0)) {
        tx = ((((((long_reward[block].toString() + " M&Ms ") + textopt1) + "              ") + short_reward[block].toString()) + " M&Ms ") + textopt2);
        chanceLeft = chance[(n % 9)];
        chanceRight = textchance1;
        transparencyRight = 1;
        transparencyLeft = 0;
        fixedImage = (("img/even_" + round((short_reward[block] / 4)).toString()) + "_square.png");
        delayImage = (("img/even_8_square_" + round((short_reward[block] / 4)).toString()) + ".png");
        choiceImage = (("img/even_choice_" + round((short_reward[block] / 4)).toString()) + ".png");
        choiceImageLeft = (("img/even_8_circle_" + round((short_reward[block] / 4)).toString()) + ".png");
        choiceImageRight = (("img/even_" + round((short_reward[block] / 4)).toString()) + "_circle.png");
        rewardImageLeft = "img/8m&m.png";
        rewardImageRight = (("img/" + round((short_reward[block] / 4)).toString()) + "m&m.png");
        rewardLeft = long_reward[block];
        rewardRight = short_reward[block];
        block_screen = 0;
    } else {
        tx = ((((((short_reward[block].toString() + " M&Ms ") + textopt2) + "              ") + long_reward[block].toString()) + " M&Ms ") + textopt1);
        chanceLeft = textchance1;
        chanceRight = chance[(n % 9)];
        transparencyRight = 0;
        transparencyLeft = 1;
        fixedImage = (("img/odd_" + round((short_reward[block] / 4)).toString()) + "_square.png");
        delayImage = (("img/odd_8_square_" + round((short_reward[block] / 4)).toString()) + ".png");
        choiceImage = (("img/odd_choice_" + round((short_reward[block] / 4)).toString()) + ".png");
        choiceImageLeft = (("img/odd_" + round((short_reward[block] / 4)).toString()) + "_circle.png");
        choiceImageRight = (("img/odd_8_circle_" + round((short_reward[block] / 4)).toString()) + ".png");
        rewardImageLeft = (("img/" + round((short_reward[block] / 4)).toString()) + "m&m.png");
        rewardImageRight = "img/8m&m.png";
        rewardLeft = short_reward[block];
        rewardRight = long_reward[block];
        block_screen = 0;
    }
    
    // keep track of which components have finished
    InitializationComponents = [];
    
    for (const thisComponent of InitializationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function InitializationRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Initialization'-------
    // get current time
    t = InitializationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of InitializationComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InitializationRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Initialization'-------
    for (const thisComponent of InitializationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "Initialization" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var begininbetweenComponents;
function begininbetweenRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'begininbetween'-------
    t = 0;
    begininbetweenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    text_6.setText(text12);
    // keep track of which components have finished
    begininbetweenComponents = [];
    begininbetweenComponents.push(text_6);
    
    for (const thisComponent of begininbetweenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function begininbetweenRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'begininbetween'-------
    // get current time
    t = begininbetweenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_6.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of begininbetweenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function begininbetweenRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'begininbetween'-------
    for (const thisComponent of begininbetweenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var fixFramedComponents;
function fixFramedRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fixFramed'-------
    t = 0;
    fixFramedClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    fixImg.setImage(fixedImage);
    text_13.setText(text13);
    // keep track of which components have finished
    fixFramedComponents = [];
    fixFramedComponents.push(fixImg);
    fixFramedComponents.push(text_13);
    
    for (const thisComponent of fixFramedComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function fixFramedRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fixFramed'-------
    // get current time
    t = fixFramedClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixImg* updates
    if (t >= 0.0 && fixImg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixImg.tStart = t;  // (not accounting for frame time here)
      fixImg.frameNStart = frameN;  // exact frame index
      
      fixImg.setAutoDraw(true);
    }

    frameRemains = 0.0 + short_delay[block] - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixImg.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixImg.setAutoDraw(false);
    }
    
    // *text_13* updates
    if (t >= 0.0 && text_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_13.tStart = t;  // (not accounting for frame time here)
      text_13.frameNStart = frameN;  // exact frame index
      
      text_13.setAutoDraw(true);
    }

    frameRemains = 0.0 + short_delay[block] - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_13.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_13.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of fixFramedComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixFramedRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fixFramed'-------
    for (const thisComponent of fixFramedComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "fixFramed" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var inBetweenComponents;
function inBetweenRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'inBetween'-------
    t = 0;
    inBetweenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    text_14.setText(text14);
    // keep track of which components have finished
    inBetweenComponents = [];
    inBetweenComponents.push(text_14);
    
    for (const thisComponent of inBetweenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function inBetweenRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'inBetween'-------
    // get current time
    t = inBetweenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_14* updates
    if (t >= 0.0 && text_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_14.tStart = t;  // (not accounting for frame time here)
      text_14.frameNStart = frameN;  // exact frame index
      
      text_14.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_14.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_14.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of inBetweenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function inBetweenRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'inBetween'-------
    for (const thisComponent of inBetweenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var delayFramedComponents;
function delayFramedRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'delayFramed'-------
    t = 0;
    delayFramedClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    delayImg.setImage(delayImage);
    text_130.setText(text13);
    // keep track of which components have finished
    delayFramedComponents = [];
    delayFramedComponents.push(delayImg);
    delayFramedComponents.push(text_130);
    
    for (const thisComponent of delayFramedComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function delayFramedRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'delayFramed'-------
    // get current time
    t = delayFramedClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *delayImg* updates
    if (t >= 0.0 && delayImg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      delayImg.tStart = t;  // (not accounting for frame time here)
      delayImg.frameNStart = frameN;  // exact frame index
      
      delayImg.setAutoDraw(true);
    }

    frameRemains = 0.0 + long_delay[block] - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (delayImg.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      delayImg.setAutoDraw(false);
    }
    
    // *text_130* updates
    if (t >= 0.0 && text_130.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_130.tStart = t;  // (not accounting for frame time here)
      text_130.frameNStart = frameN;  // exact frame index
      
      text_130.setAutoDraw(true);
    }

    frameRemains = 0.0 + long_delay[block] - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_130.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_130.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of delayFramedComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function delayFramedRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'delayFramed'-------
    for (const thisComponent of delayFramedComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "delayFramed" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_3_allKeys;
var intro4chooseComponents;
function intro4chooseRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'intro4choose'-------
    t = 0;
    intro4chooseClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    text_2.setText(text3);
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    intro4chooseComponents = [];
    intro4chooseComponents.push(text_2);
    intro4chooseComponents.push(key_resp_3);
    
    for (const thisComponent of intro4chooseComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function intro4chooseRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'intro4choose'-------
    // get current time
    t = intro4chooseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    bb = 0;
    
    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of intro4chooseComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function intro4chooseRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'intro4choose'-------
    for (const thisComponent of intro4chooseComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "intro4choose" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _choiceResp_allKeys;
var left;
var right;
var delta;
var choiceScreenComponents;
function choiceScreenRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'choiceScreen'-------
    t = 0;
    choiceScreenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    choiceImg.setImage(choiceImage);
    choiceResp.keys = undefined;
    choiceResp.rt = undefined;
    _choiceResp_allKeys = [];
    choiceWarning.setText(tx);
    left = 0;
    right = 0;
    if ((nk < 3)) {
        delta = 2;
    } else {
        delta = 1;
    }
    
    to_choose.setText(text4);
    // keep track of which components have finished
    choiceScreenComponents = [];
    choiceScreenComponents.push(choiceImg);
    choiceScreenComponents.push(choiceResp);
    choiceScreenComponents.push(choiceWarning);
    choiceScreenComponents.push(to_choose);
    
    for (const thisComponent of choiceScreenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function choiceScreenRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'choiceScreen'-------
    // get current time
    t = choiceScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *choiceImg* updates
    if (t >= 0.0 && choiceImg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choiceImg.tStart = t;  // (not accounting for frame time here)
      choiceImg.frameNStart = frameN;  // exact frame index
      
      choiceImg.setAutoDraw(true);
    }

    
    // *choiceResp* updates
    if (t >= 0.0 && choiceResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choiceResp.tStart = t;  // (not accounting for frame time here)
      choiceResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { choiceResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { choiceResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { choiceResp.clearEvents(); });
    }

    if (choiceResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = choiceResp.getKeys({keyList: ['1', '2'], waitRelease: false});
      _choiceResp_allKeys = _choiceResp_allKeys.concat(theseKeys);
      if (_choiceResp_allKeys.length > 0) {
        choiceResp.keys = _choiceResp_allKeys[_choiceResp_allKeys.length - 1].name;  // just the last key pressed
        choiceResp.rt = _choiceResp_allKeys[_choiceResp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *choiceWarning* updates
    if (t >= 0 && choiceWarning.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choiceWarning.tStart = t;  // (not accounting for frame time here)
      choiceWarning.frameNStart = frameN;  // exact frame index
      
      choiceWarning.setAutoDraw(true);
    }

    
    // *to_choose* updates
    if (t >= 0.0 && to_choose.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      to_choose.tStart = t;  // (not accounting for frame time here)
      to_choose.frameNStart = frameN;  // exact frame index
      
      to_choose.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of choiceScreenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var left_delay;
var right_delay;
var level;
var repeat_text;
function choiceScreenRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'choiceScreen'-------
    for (const thisComponent of choiceScreenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('choiceResp.keys', choiceResp.keys);
    if (typeof choiceResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('choiceResp.rt', choiceResp.rt);
        routineTimer.reset();
        }
    
    choiceResp.stop();
    psychoJS.experiment.addData("small_reward", short_reward[block]);
    psychoJS.experiment.addData("Delay", long_delay[block]);
    if (((n % 2) === 0)) {
        left_delay = long_delay[block];
        right_delay = short_delay[block];
        if ((choiceResp.keys === "1")) {
            if ((chanceLeft === textchance1)) {
                transparencyLeft = 1;
                total += long_reward[block];
            }
            left = 1;
            short_reward[block] = round((short_reward[block] + delta), 2);
            h += choiceResp.keys;
        } else {
            if ((choiceResp.keys === "2")) {
                if ((chanceRight === textchance1)) {
                    transparencyRight = 1;
                    total += short_reward[block];
                }
                right = 1;
                short_reward[block] = round((short_reward[block] - delta), 2);
                h += choiceResp.keys;
            }
        }
    } else {
        left_delay = short_delay[block];
        right_delay = long_delay[block];
        if ((choiceResp.keys === "1")) {
            if ((chanceLeft === textchance1)) {
                transparencyLeft = 1;
                total += short_reward[block];
            }
            left = 1;
            short_reward[block] = round((short_reward[block] - delta), 2);
            h += choiceResp.keys;
        } else {
            if ((choiceResp.keys === "2")) {
                if ((chanceRight === textchance1)) {
                    transparencyRight = 1;
                    total += long_reward[block];
                }
                right = 1;
                short_reward[block] = round((short_reward[block] + delta), 2);
                h += choiceResp.keys;
            }
        }
    }
    if ((short_reward[block] > 30)) {
        short_reward[block] = 30;
    } else {
        if ((short_reward[block] < 1)) {
            short_reward[block] = 1;
        }
    }
    if ((block === 0)) {
        intro += 1;
        if ((intro === 4)) {
            block += 1;
            total = 0;
            block_screen = 1;
            bb = 1;
            h = "start";
        }
    }
    if (((((h.slice((- 2)) === "11") || (h.slice((- 2)) === "22")) || (short_reward[block] === 1)) || (short_reward[block] === 30))) {
        a[(block - 1)] += short_reward[block];
        nk += 1;
        if ((nk === 6)) {
            a[(block - 1)] = (a[(block - 1)] / 6);
            block += 1;
            h = "start";
            block_screen = 1;
            bb = 1;
            nk = 0;
        }
    }
    level = Number.parseInt((total / 200));
    repeat_text = ((((((((text7 + " ") + round(total, 2).toString()) + "\n") + text8) + " ") + level.toString()) + "\n") + text9);
    if ((level > 0)) {
        if ((total < 800)) {
            tl[Number.parseInt((level - 1))] = 1;
        }
    }
    n += 1;
    
    // the Routine "choiceScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var choiceLeftComponents;
function choiceLeftRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'choiceLeft'-------
    t = 0;
    choiceLeftClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    leftImg.setImage(choiceImageLeft);
    // keep track of which components have finished
    choiceLeftComponents = [];
    choiceLeftComponents.push(leftImg);
    
    for (const thisComponent of choiceLeftComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function choiceLeftRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'choiceLeft'-------
    // get current time
    t = choiceLeftClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *leftImg* updates
    if (t >= 0.0 && leftImg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      leftImg.tStart = t;  // (not accounting for frame time here)
      leftImg.frameNStart = frameN;  // exact frame index
      
      leftImg.setAutoDraw(true);
    }

    frameRemains = 0.0 + left_delay - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (leftImg.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      leftImg.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of choiceLeftComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function choiceLeftRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'choiceLeft'-------
    for (const thisComponent of choiceLeftComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "choiceLeft" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var feedbackLeftComponents;
function feedbackLeftRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'feedbackLeft'-------
    t = 0;
    feedbackLeftClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    rewardImgLeft.setOpacity(transparencyLeft);
    rewardImgLeft.setImage(rewardImageLeft);
    rewardText.setText(chanceLeft);
    psychoJS.experiment.addData("result of chosen", chanceLeft);
    psychoJS.experiment.addData("delay of chosen", left_delay);
    psychoJS.experiment.addData("reward of chosen", rewardLeft);
    psychoJS.experiment.addData("total amount", total);
    
    // keep track of which components have finished
    feedbackLeftComponents = [];
    feedbackLeftComponents.push(rewardImgLeft);
    feedbackLeftComponents.push(rewardText);
    
    for (const thisComponent of feedbackLeftComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedbackLeftRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'feedbackLeft'-------
    // get current time
    t = feedbackLeftClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *rewardImgLeft* updates
    if (t >= 0 && rewardImgLeft.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rewardImgLeft.tStart = t;  // (not accounting for frame time here)
      rewardImgLeft.frameNStart = frameN;  // exact frame index
      
      rewardImgLeft.setAutoDraw(true);
    }

    frameRemains = 0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (rewardImgLeft.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      rewardImgLeft.setAutoDraw(false);
    }
    
    // *rewardText* updates
    if (t >= 0 && rewardText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rewardText.tStart = t;  // (not accounting for frame time here)
      rewardText.frameNStart = frameN;  // exact frame index
      
      rewardText.setAutoDraw(true);
    }

    frameRemains = 0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (rewardText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      rewardText.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of feedbackLeftComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackLeftRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'feedbackLeft'-------
    for (const thisComponent of feedbackLeftComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var choiceRightComponents;
function choiceRightRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'choiceRight'-------
    t = 0;
    choiceRightClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    rightImg.setImage(choiceImageRight);
    // keep track of which components have finished
    choiceRightComponents = [];
    choiceRightComponents.push(rightImg);
    
    for (const thisComponent of choiceRightComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function choiceRightRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'choiceRight'-------
    // get current time
    t = choiceRightClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *rightImg* updates
    if (t >= 0.0 && rightImg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rightImg.tStart = t;  // (not accounting for frame time here)
      rightImg.frameNStart = frameN;  // exact frame index
      
      rightImg.setAutoDraw(true);
    }

    frameRemains = 0.0 + right_delay - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (rightImg.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      rightImg.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of choiceRightComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function choiceRightRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'choiceRight'-------
    for (const thisComponent of choiceRightComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "choiceRight" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var feedbackRightComponents;
function feedbackRightRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'feedbackRight'-------
    t = 0;
    feedbackRightClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    rewardImgRight.setOpacity(transparencyRight);
    rewardImgRight.setImage(rewardImageRight);
    rightText.setText(chanceRight);
    psychoJS.experiment.addData("result of chosen", chanceRight);
    psychoJS.experiment.addData("delay of chosen", right_delay);
    psychoJS.experiment.addData("reward of chosen", rewardRight);
    psychoJS.experiment.addData("total amount", total);
    
    // keep track of which components have finished
    feedbackRightComponents = [];
    feedbackRightComponents.push(rewardImgRight);
    feedbackRightComponents.push(rightText);
    
    for (const thisComponent of feedbackRightComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedbackRightRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'feedbackRight'-------
    // get current time
    t = feedbackRightClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *rewardImgRight* updates
    if (t >= 0 && rewardImgRight.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rewardImgRight.tStart = t;  // (not accounting for frame time here)
      rewardImgRight.frameNStart = frameN;  // exact frame index
      
      rewardImgRight.setAutoDraw(true);
    }

    frameRemains = 0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (rewardImgRight.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      rewardImgRight.setAutoDraw(false);
    }
    
    // *rightText* updates
    if (t >= 0.0 && rightText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rightText.tStart = t;  // (not accounting for frame time here)
      rightText.frameNStart = frameN;  // exact frame index
      
      rightText.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (rightText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      rightText.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of feedbackRightComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRightRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'feedbackRight'-------
    for (const thisComponent of feedbackRightComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _repeatResp_allKeys;
var repeatScreenComponents;
function repeatScreenRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'repeatScreen'-------
    t = 0;
    repeatScreenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    block4.setOpacity(tl[3]);
    block4.setImage('img/coffee.jpeg');
    block3.setOpacity(tl[2]);
    block3.setImage('img/cake.jpeg');
    block2.setOpacity(tl[1]);
    block2.setImage('img/gummi.jpeg');
    block1.setOpacity(tl[0]);
    block1.setImage('img/tea.jpeg');
    repeatText.setText(repeat_text);
    repeatResp.keys = undefined;
    repeatResp.rt = undefined;
    _repeatResp_allKeys = [];
    // keep track of which components have finished
    repeatScreenComponents = [];
    repeatScreenComponents.push(block4);
    repeatScreenComponents.push(block3);
    repeatScreenComponents.push(block2);
    repeatScreenComponents.push(block1);
    repeatScreenComponents.push(repeatText);
    repeatScreenComponents.push(repeatResp);
    
    for (const thisComponent of repeatScreenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function repeatScreenRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'repeatScreen'-------
    // get current time
    t = repeatScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *block4* updates
    if (t >= 0.0 && block4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block4.tStart = t;  // (not accounting for frame time here)
      block4.frameNStart = frameN;  // exact frame index
      
      block4.setAutoDraw(true);
    }

    
    // *block3* updates
    if (t >= 0.0 && block3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block3.tStart = t;  // (not accounting for frame time here)
      block3.frameNStart = frameN;  // exact frame index
      
      block3.setAutoDraw(true);
    }

    
    // *block2* updates
    if (t >= 0.0 && block2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block2.tStart = t;  // (not accounting for frame time here)
      block2.frameNStart = frameN;  // exact frame index
      
      block2.setAutoDraw(true);
    }

    
    // *block1* updates
    if (t >= 0.0 && block1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block1.tStart = t;  // (not accounting for frame time here)
      block1.frameNStart = frameN;  // exact frame index
      
      block1.setAutoDraw(true);
    }

    
    // *repeatText* updates
    if (t >= 0 && repeatText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      repeatText.tStart = t;  // (not accounting for frame time here)
      repeatText.frameNStart = frameN;  // exact frame index
      
      repeatText.setAutoDraw(true);
    }

    
    // *repeatResp* updates
    if (t >= 0.0 && repeatResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      repeatResp.tStart = t;  // (not accounting for frame time here)
      repeatResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { repeatResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { repeatResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { repeatResp.clearEvents(); });
    }

    if (repeatResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = repeatResp.getKeys({keyList: ['space'], waitRelease: false});
      _repeatResp_allKeys = _repeatResp_allKeys.concat(theseKeys);
      if (_repeatResp_allKeys.length > 0) {
        repeatResp.keys = _repeatResp_allKeys[_repeatResp_allKeys.length - 1].name;  // just the last key pressed
        repeatResp.rt = _repeatResp_allKeys[_repeatResp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of repeatScreenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function repeatScreenRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'repeatScreen'-------
    for (const thisComponent of repeatScreenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('repeatResp.keys', repeatResp.keys);
    if (typeof repeatResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('repeatResp.rt', repeatResp.rt);
        routineTimer.reset();
        }
    
    repeatResp.stop();
    if ((block === 5)) {
        discountingBlockLong.finished = true;
    }
    
    // the Routine "repeatScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
var Block_screenComponents;
function Block_screenRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Block_screen'-------
    t = 0;
    Block_screenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    text.setText(ending_text);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    Block_screenComponents = [];
    Block_screenComponents.push(text);
    Block_screenComponents.push(key_resp);
    
    for (const thisComponent of Block_screenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Block_screenRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Block_screen'-------
    // get current time
    t = Block_screenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Block_screenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Block_screenRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Block_screen'-------
    for (const thisComponent of Block_screenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    ending_text = text10;
    
    // the Routine "Block_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var maxa;
var k;
var endScreenComponents;
function endScreenRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'endScreen'-------
    t = 0;
    endScreenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    endText.setText(text11);
    maxa = Math.max(a[0], a[1], a[2], a[3]);
    for (var i = 0, _pj_a = 4; (i < _pj_a); i += 1) {
        a[i] = (a[i] / maxa);
    }
    k = ((((6 * (a[3] + a[0])) + (8 * (a[3] + a[1]))) + (15 * (a[1] + a[2]))) / (29 * 2));
    psychoJS.experiment.addData("DelayFactor", k);
    
    // keep track of which components have finished
    endScreenComponents = [];
    endScreenComponents.push(endText);
    
    for (const thisComponent of endScreenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function endScreenRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'endScreen'-------
    // get current time
    t = endScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *endText* updates
    if (t >= 0 && endText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      endText.tStart = t;  // (not accounting for frame time here)
      endText.frameNStart = frameN;  // exact frame index
      
      endText.setAutoDraw(true);
    }

    frameRemains = 0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (endText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      endText.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of endScreenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endScreenRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'endScreen'-------
    for (const thisComponent of endScreenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
