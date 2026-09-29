gdjs.in_237cioCode = {};
gdjs.in_237cioCode.localVariables = [];
gdjs.in_237cioCode.idToCallbackMap = new Map();
gdjs.in_237cioCode.GDtela_9595inicioObjects1= [];
gdjs.in_237cioCode.GDtela_9595inicioObjects2= [];
gdjs.in_237cioCode.GDjogarObjects1= [];
gdjs.in_237cioCode.GDjogarObjects2= [];
gdjs.in_237cioCode.GDsairObjects1= [];
gdjs.in_237cioCode.GDsairObjects2= [];
gdjs.in_237cioCode.GDNewSpriteObjects1= [];
gdjs.in_237cioCode.GDNewSpriteObjects2= [];
gdjs.in_237cioCode.GDNewSprite2Objects1= [];
gdjs.in_237cioCode.GDNewSprite2Objects2= [];


gdjs.in_237cioCode.mapOfGDgdjs_9546in_9595237cioCode_9546GDjogarObjects1Objects = Hashtable.newFrom({"jogar": gdjs.in_237cioCode.GDjogarObjects1});
gdjs.in_237cioCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "principal");
}
{gdjs.evtTools.sound.playMusic(runtimeScene, "tutu_musica.wav", true, 30, 1);
}
}

}


};gdjs.in_237cioCode.mapOfGDgdjs_9546in_9595237cioCode_9546GDjogarObjects1Objects = Hashtable.newFrom({"jogar": gdjs.in_237cioCode.GDjogarObjects1});
gdjs.in_237cioCode.mapOfGDgdjs_9546in_9595237cioCode_9546GDsairObjects1Objects = Hashtable.newFrom({"sair": gdjs.in_237cioCode.GDsairObjects1});
gdjs.in_237cioCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
}

}


};gdjs.in_237cioCode.mapOfGDgdjs_9546in_9595237cioCode_9546GDsairObjects1Objects = Hashtable.newFrom({"sair": gdjs.in_237cioCode.GDsairObjects1});
gdjs.in_237cioCode.eventsList2 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(runtimeScene.getObjects("jogar"), gdjs.in_237cioCode.GDjogarObjects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.in_237cioCode.mapOfGDgdjs_9546in_9595237cioCode_9546GDjogarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.in_237cioCode.GDjogarObjects1 */
{for(var i = 0, len = gdjs.in_237cioCode.GDjogarObjects1.length ;i < len;++i) {
    gdjs.in_237cioCode.GDjogarObjects1[i].getBehavior("Effect").enableEffect("Bilho jogo", true);
}
}

{ //Subevents
gdjs.in_237cioCode.eventsList0(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("jogar"), gdjs.in_237cioCode.GDjogarObjects1);

if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.in_237cioCode.mapOfGDgdjs_9546in_9595237cioCode_9546GDjogarObjects1Objects, runtimeScene, true, true);
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.in_237cioCode.GDjogarObjects1 */
{for(var i = 0, len = gdjs.in_237cioCode.GDjogarObjects1.length ;i < len;++i) {
    gdjs.in_237cioCode.GDjogarObjects1[i].getBehavior("Effect").enableEffect("Bilho jogo", false);
}
}
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("sair"), gdjs.in_237cioCode.GDsairObjects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.in_237cioCode.mapOfGDgdjs_9546in_9595237cioCode_9546GDsairObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.in_237cioCode.GDsairObjects1 */
{for(var i = 0, len = gdjs.in_237cioCode.GDsairObjects1.length ;i < len;++i) {
    gdjs.in_237cioCode.GDsairObjects1[i].getBehavior("Effect").enableEffect("brilho sair", true);
}
}

{ //Subevents
gdjs.in_237cioCode.eventsList1(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("sair"), gdjs.in_237cioCode.GDsairObjects1);

if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.in_237cioCode.mapOfGDgdjs_9546in_9595237cioCode_9546GDsairObjects1Objects, runtimeScene, true, true);
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.in_237cioCode.GDsairObjects1 */
{for(var i = 0, len = gdjs.in_237cioCode.GDsairObjects1.length ;i < len;++i) {
    gdjs.in_237cioCode.GDsairObjects1[i].getBehavior("Effect").enableEffect("brilho sair", false);
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};

gdjs.in_237cioCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.in_237cioCode.GDtela_9595inicioObjects1.length = 0;
gdjs.in_237cioCode.GDtela_9595inicioObjects2.length = 0;
gdjs.in_237cioCode.GDjogarObjects1.length = 0;
gdjs.in_237cioCode.GDjogarObjects2.length = 0;
gdjs.in_237cioCode.GDsairObjects1.length = 0;
gdjs.in_237cioCode.GDsairObjects2.length = 0;
gdjs.in_237cioCode.GDNewSpriteObjects1.length = 0;
gdjs.in_237cioCode.GDNewSpriteObjects2.length = 0;
gdjs.in_237cioCode.GDNewSprite2Objects1.length = 0;
gdjs.in_237cioCode.GDNewSprite2Objects2.length = 0;

gdjs.in_237cioCode.eventsList2(runtimeScene);
gdjs.in_237cioCode.GDtela_9595inicioObjects1.length = 0;
gdjs.in_237cioCode.GDtela_9595inicioObjects2.length = 0;
gdjs.in_237cioCode.GDjogarObjects1.length = 0;
gdjs.in_237cioCode.GDjogarObjects2.length = 0;
gdjs.in_237cioCode.GDsairObjects1.length = 0;
gdjs.in_237cioCode.GDsairObjects2.length = 0;
gdjs.in_237cioCode.GDNewSpriteObjects1.length = 0;
gdjs.in_237cioCode.GDNewSpriteObjects2.length = 0;
gdjs.in_237cioCode.GDNewSprite2Objects1.length = 0;
gdjs.in_237cioCode.GDNewSprite2Objects2.length = 0;


return;

}

gdjs['in_237cioCode'] = gdjs.in_237cioCode;
