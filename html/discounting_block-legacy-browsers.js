/************************** 
 * Discounting_Block Test *
 **************************/

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
  expInfo['psychopyVersion'] = '2020.2.10';
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


var Instruction_2Clock;
var Intro_1;
var intro_1_ending;
var InitializationClock;
var chance;
var fixFramedClock;
var fixImg;
var text_4;
var delayFramedClock;
var delayImg;
var text_3;
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
var text_5;
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
  // Initialize components for Routine "Instruction_2"
  Instruction_2Clock = new util.Clock();
  Intro_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Intro_1',
    text: "Welcome dear participants\n\nThis game is about collecting as much M&Ms as you can!\n\nEach time you must choose from fixed 32 M&Ms with probability of 2/3 or smaller amount of M&Ms with 100% probability.  The exact amount for each option is written on screen.\n\nEven if you are confused now, take it easy and try to play. It will get to you.\n\nPress 'space' to play it a bit for yourself..",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  intro_1_ending = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Initialization"
  InitializationClock = new util.Clock();
  chance = ["You got it!", "You did not get it!", "You got it!", "You did not get it!", "You got it!", "You got it!", "You did not get it!", "You got it!", "You got it!"];
  
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
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'Please wait, you are expriencing the delay!',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('red'),  opacity: 1,
    depth: -1.0 
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
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'Please wait, you are expriencing the delay!',
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
    text: "You had exprienced the delay!\n\nPlease press 'space' to start choosing again.",
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
    text: 'default text',
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
  
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: '(press "1")                                              (press "2")',
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
    text: 'default text',
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
    text: 'default text',
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
    text: 'default text',
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
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  ending_text = "You saw how easy it was?! \n\n Have you noticed the amount of delay that was different for small and large M&Ms? \n\n Their waiting duration will be presented at the beginning of the each 4 blocks of the game. \n\n You should know that you cannot increase the number of rounds by choosing the faster rewards. \n\n One more thing, for every 200 points you earn one hidden reward will be shown!  \n\n Press space to play the game for real!";
  
  // Initialize components for Routine "endScreen"
  endScreenClock = new util.Clock();
  endText = new visual.TextStim({
    win: psychoJS.window,
    name: 'endText',
    text: 'The experiment is finished\n                 Thank you!',
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
    intro_1_ending.keys = undefined;
    intro_1_ending.rt = undefined;
    _intro_1_ending_allKeys = [];
    // keep track of which components have finished
    Instruction_2Components = [];
    Instruction_2Components.push(Intro_1);
    Instruction_2Components.push(intro_1_ending);
    
    Instruction_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    Instruction_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    Instruction_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
  discountingBlockLong.forEach(function() {
    const snapshot = discountingBlockLong.getSnapshot();

    discountingBlockLongLoopScheduler.add(importConditions(snapshot));
    discountingBlockLongLoopScheduler.add(InitializationRoutineBegin(snapshot));
    discountingBlockLongLoopScheduler.add(InitializationRoutineEachFrame(snapshot));
    discountingBlockLongLoopScheduler.add(InitializationRoutineEnd(snapshot));
    const blockbegin1LoopScheduler = new Scheduler(psychoJS);
    discountingBlockLongLoopScheduler.add(blockbegin1LoopBegin, blockbegin1LoopScheduler);
    discountingBlockLongLoopScheduler.add(blockbegin1LoopScheduler);
    discountingBlockLongLoopScheduler.add(blockbegin1LoopEnd);
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
  });

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
  blockbegin1.forEach(function() {
    const snapshot = blockbegin1.getSnapshot();

    blockbegin1LoopScheduler.add(importConditions(snapshot));
    blockbegin1LoopScheduler.add(fixFramedRoutineBegin(snapshot));
    blockbegin1LoopScheduler.add(fixFramedRoutineEachFrame(snapshot));
    blockbegin1LoopScheduler.add(fixFramedRoutineEnd(snapshot));
    blockbegin1LoopScheduler.add(endLoopIteration(blockbegin1LoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function blockbegin1LoopEnd() {
  psychoJS.experiment.removeLoop(blockbegin1);

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
  blockbegin0.forEach(function() {
    const snapshot = blockbegin0.getSnapshot();

    blockbegin0LoopScheduler.add(importConditions(snapshot));
    blockbegin0LoopScheduler.add(delayFramedRoutineBegin(snapshot));
    blockbegin0LoopScheduler.add(delayFramedRoutineEachFrame(snapshot));
    blockbegin0LoopScheduler.add(delayFramedRoutineEnd(snapshot));
    blockbegin0LoopScheduler.add(endLoopIteration(blockbegin0LoopScheduler, snapshot));
  });

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
  blockbegin2.forEach(function() {
    const snapshot = blockbegin2.getSnapshot();

    blockbegin2LoopScheduler.add(importConditions(snapshot));
    blockbegin2LoopScheduler.add(intro4chooseRoutineBegin(snapshot));
    blockbegin2LoopScheduler.add(intro4chooseRoutineEachFrame(snapshot));
    blockbegin2LoopScheduler.add(intro4chooseRoutineEnd(snapshot));
    blockbegin2LoopScheduler.add(endLoopIteration(blockbegin2LoopScheduler, snapshot));
  });

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
  choiceLeftLoop.forEach(function() {
    const snapshot = choiceLeftLoop.getSnapshot();

    choiceLeftLoopLoopScheduler.add(importConditions(snapshot));
    choiceLeftLoopLoopScheduler.add(choiceLeftRoutineBegin(snapshot));
    choiceLeftLoopLoopScheduler.add(choiceLeftRoutineEachFrame(snapshot));
    choiceLeftLoopLoopScheduler.add(choiceLeftRoutineEnd(snapshot));
    choiceLeftLoopLoopScheduler.add(feedbackLeftRoutineBegin(snapshot));
    choiceLeftLoopLoopScheduler.add(feedbackLeftRoutineEachFrame(snapshot));
    choiceLeftLoopLoopScheduler.add(feedbackLeftRoutineEnd(snapshot));
    choiceLeftLoopLoopScheduler.add(endLoopIteration(choiceLeftLoopLoopScheduler, snapshot));
  });

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
  choiceRightLoop.forEach(function() {
    const snapshot = choiceRightLoop.getSnapshot();

    choiceRightLoopLoopScheduler.add(importConditions(snapshot));
    choiceRightLoopLoopScheduler.add(choiceRightRoutineBegin(snapshot));
    choiceRightLoopLoopScheduler.add(choiceRightRoutineEachFrame(snapshot));
    choiceRightLoopLoopScheduler.add(choiceRightRoutineEnd(snapshot));
    choiceRightLoopLoopScheduler.add(feedbackRightRoutineBegin(snapshot));
    choiceRightLoopLoopScheduler.add(feedbackRightRoutineEachFrame(snapshot));
    choiceRightLoopLoopScheduler.add(feedbackRightRoutineEnd(snapshot));
    choiceRightLoopLoopScheduler.add(endLoopIteration(choiceRightLoopLoopScheduler, snapshot));
  });

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
  trials.forEach(function() {
    const snapshot = trials.getSnapshot();

    trialsLoopScheduler.add(importConditions(snapshot));
    trialsLoopScheduler.add(Block_screenRoutineBegin(snapshot));
    trialsLoopScheduler.add(Block_screenRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(Block_screenRoutineEnd(snapshot));
    trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
  });

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
    if (((n % 2) === 0)) {
        tx = ((((long_reward[block].toString() + "  for 67%") + "              ") + short_reward[block].toString()) + "  for 100%");
        chanceLeft = chance[(n % 9)];
        chanceRight = "You got it!";
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
        tx = ((((short_reward[block].toString() + "  for 100%") + "              ") + long_reward[block].toString()) + "  for 67%");
        chanceLeft = "You got it!";
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
    
    InitializationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    InitializationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    InitializationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "Initialization" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
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
    // keep track of which components have finished
    fixFramedComponents = [];
    fixFramedComponents.push(fixImg);
    fixFramedComponents.push(text_4);
    
    fixFramedComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
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
    if ((fixImg.status === PsychoJS.Status.STARTED || fixImg.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      fixImg.setAutoDraw(false);
    }
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }

    frameRemains = 0.0 + short_delay[block] - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((text_4.status === PsychoJS.Status.STARTED || text_4.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      text_4.setAutoDraw(false);
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
    fixFramedComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    fixFramedComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "fixFramed" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
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
    // keep track of which components have finished
    delayFramedComponents = [];
    delayFramedComponents.push(delayImg);
    delayFramedComponents.push(text_3);
    
    delayFramedComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    if ((delayImg.status === PsychoJS.Status.STARTED || delayImg.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      delayImg.setAutoDraw(false);
    }
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + long_delay[block] - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((text_3.status === PsychoJS.Status.STARTED || text_3.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      text_3.setAutoDraw(false);
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
    delayFramedComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    delayFramedComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    intro4chooseComponents = [];
    intro4chooseComponents.push(text_2);
    intro4chooseComponents.push(key_resp_3);
    
    intro4chooseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    intro4chooseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    intro4chooseComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    
    // keep track of which components have finished
    choiceScreenComponents = [];
    choiceScreenComponents.push(choiceImg);
    choiceScreenComponents.push(choiceResp);
    choiceScreenComponents.push(choiceWarning);
    choiceScreenComponents.push(text_5);
    
    choiceScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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

    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
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
    choiceScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    choiceScreenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('choiceResp.keys', choiceResp.keys);
    if (typeof choiceResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('choiceResp.rt', choiceResp.rt);
        routineTimer.reset();
        }
    
    choiceResp.stop();
    thisExp.addData("small_reward", short_reward[block]);
    thisExp.addData("Delay", long_delay[block]);
    if (((n % 2) === 0)) {
        left_delay = long_delay[block];
        right_delay = short_delay[block];
        if ((choiceResp.keys === "1")) {
            if ((chanceLeft === "You got it!")) {
                transparencyLeft = 1;
                total += long_reward[block];
            }
            left = 1;
            short_reward[block] = round((short_reward[block] + delta), 2);
            h += choiceResp.keys;
        } else {
            if ((choiceResp.keys === "2")) {
                if ((chanceRight === "You got it!")) {
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
            if ((chanceLeft === "You got it!")) {
                transparencyLeft = 1;
                total += short_reward[block];
            }
            left = 1;
            short_reward[block] = round((short_reward[block] - delta), 2);
            h += choiceResp.keys;
        } else {
            if ((choiceResp.keys === "2")) {
                if ((chanceRight === "You got it!")) {
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
    repeat_text = (((("total gain:" + round(total, 2).toString()) + " \n You are in level:") + level.toString()) + "\n press space to continue");
    if ((level > 0)) {
        if ((total < 800)) {
            tl[Number.parseInt((level - 1))] = 1;
        }
    }
    
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
    
    choiceLeftComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    if ((leftImg.status === PsychoJS.Status.STARTED || leftImg.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
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
    choiceLeftComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    choiceLeftComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    thisExp.addData("result of chosen", chanceLeft);
    thisExp.addData("delay of chosen", left_delay);
    thisExp.addData("reward of chosen", rewardLeft);
    thisExp.addData("total amount", total);
    
    // keep track of which components have finished
    feedbackLeftComponents = [];
    feedbackLeftComponents.push(rewardImgLeft);
    feedbackLeftComponents.push(rewardText);
    
    feedbackLeftComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    if ((rewardImgLeft.status === PsychoJS.Status.STARTED || rewardImgLeft.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
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
    if ((rewardText.status === PsychoJS.Status.STARTED || rewardText.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
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
    feedbackLeftComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    feedbackLeftComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    
    choiceRightComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    if ((rightImg.status === PsychoJS.Status.STARTED || rightImg.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
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
    choiceRightComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    choiceRightComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    thisExp.addData("result of chosen", chanceRight);
    thisExp.addData("delay of chosen", right_delay);
    thisExp.addData("reward of chosen", rewardRight);
    thisExp.addData("total amount", total);
    
    // keep track of which components have finished
    feedbackRightComponents = [];
    feedbackRightComponents.push(rewardImgRight);
    feedbackRightComponents.push(rightText);
    
    feedbackRightComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    if ((rewardImgRight.status === PsychoJS.Status.STARTED || rewardImgRight.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
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
    if ((rightText.status === PsychoJS.Status.STARTED || rightText.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
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
    feedbackRightComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    feedbackRightComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    
    repeatScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    repeatScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    repeatScreenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    
    Block_screenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    Block_screenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    Block_screenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    ending_text = "This block has ended. \n \nTo start and experience the delay of the next block, press space.";
    
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
    maxa = Math.max(a[0], a[1], a[2], a[3]);
    for (var i = 0, _pj_a = 4; (i < _pj_a); i += 1) {
        a[i] = (a[i] / maxa);
    }
    k = ((((6 * (a[3] + a[0])) + (8 * (a[3] + a[1]))) + (15 * (a[1] + a[2]))) / (29 * 2));
    thisExp.addData("DelayFactor", k);
    
    // keep track of which components have finished
    endScreenComponents = [];
    endScreenComponents.push(endText);
    
    endScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    if ((endText.status === PsychoJS.Status.STARTED || endText.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
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
    endScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    endScreenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
