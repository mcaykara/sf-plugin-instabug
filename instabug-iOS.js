const Invocation    = require('sf-core/util').Invocation;

function InstaBug() {}

InstaBug.ios = {};
InstaBug.android = {};

InstaBug.ios.native = {};
InstaBug.ios.native.startWithTokenInvocationEvent = function(token,invocationEvent){
	var argToken = new Invocation.Argument({
        type:"NSString",
        value: token
    });
    var argEvent = new Invocation.Argument({
        type:"NSInteger",
        value: invocationEvent
    });
    Invocation.invokeClassMethod("Instabug","startWithToken:invocationEvent:",[argToken,argEvent]);
}

InstaBug.ios.native.invoke = function(){
    Invocation.invokeClassMethod("Instabug","invoke",[]);
}

InstaBug.ios.native.invokeWithInvocationMode = function(invocationMode){
	var argMode = new Invocation.Argument({
        type:"NSInteger",
        value: invocationMode
    });
    Invocation.invokeClassMethod("Instabug","invokeWithInvocationMode:",[argMode]);
}

InstaBug.ios.native.dismiss = function(){
    Invocation.invokeClassMethod("Instabug","dismiss",[]);
}

InstaBug.ios.native.setColorTheme = function(theme){
	var argTheme = new Invocation.Argument({
        type:"NSInteger",
        value: theme
    });
    Invocation.invokeClassMethod("Instabug","setColorTheme:",[argTheme]);
}

InstaBug.ios.native.setPrimaryColor = function(color){
	var argColor= new Invocation.Argument({
        type:"NSObject",
        value: color
    });
    Invocation.invokeClassMethod("Instabug","setPrimaryColor:",[argColor]);
}

InstaBug.ios.native.setIntroMessageEnabled = function(isIntroMessageEnabled){
	var argIsIntroMessageEnabled = new Invocation.Argument({
        type:"BOOL",
        value: isIntroMessageEnabled
    });
    Invocation.invokeClassMethod("Instabug","setIntroMessageEnabled:",[argIsIntroMessageEnabled]);
}

InstaBug.ios.native.showIntroMessage = function(){
    Invocation.invokeClassMethod("Instabug","showIntroMessage",[]);
}

InstaBug.ios.native.setPromptOptionsEnabledWithBugFeedbackChat = function(bug,feedback,chat){
	var argBug = new Invocation.Argument({
        type:"BOOL",
        value: bug
    });
    var argFeedback = new Invocation.Argument({
        type:"BOOL",
        value: feedback
    });
    var argChat = new Invocation.Argument({
        type:"BOOL",
        value: chat
    });
    Invocation.invokeClassMethod("Instabug","setPromptOptionsEnabledWithBug:feedback:chat:",[argBug,argFeedback,argChat]);
}

InstaBug.ios.native.setLocale = function(locale){
	var argLocale = new Invocation.Argument({
        type:"NSInteger",
        value: locale
    });
    Invocation.invokeClassMethod("Instabug","setLocale:",[argLocale]);
}

InstaBug.ios.native.setValueForStringWithKey = function(value,key){
	var argValue = new Invocation.Argument({
        type:"NSString",
        value: value
    });
    var argKey = new Invocation.Argument({
        type:"NSString",
        value: key
    });
    Invocation.invokeClassMethod("Instabug","setValue:forStringWithKey:",[argValue,argKey]);
}

InstaBug.ios.native.identifyUserWithEmailName = function(email,name){
	var argEmail = new Invocation.Argument({
        type:"NSString",
        value: email
    });
    var argName = new Invocation.Argument({
        type:"NSString",
        value: name
    });
    Invocation.invokeClassMethod("Instabug","identifyUserWithEmail:name:",[argEmail,argName]);
}

InstaBug.ios.native.setUserAttributeWithKey = function(value,key){
	var argValue = new Invocation.Argument({
        type:"NSString",
        value: value
    });
    var argKey = new Invocation.Argument({
        type:"NSString",
        value: key
    });
    Invocation.invokeClassMethod("Instabug","setUserAttribute:withKey:",[argValue,argKey]);
}

InstaBug.ios.native.userAttributeForKey = function(key){
	var argKey = new Invocation.Argument({
        type:"NSString",
        value: key
    });
    return Invocation.invokeClassMethod("Instabug","userAttributeForKey:",[argKey],"NSString");
}

InstaBug.ios.native.removeUserAttributeForKey = function(key){
	var argKey = new Invocation.Argument({
        type:"NSString",
        value: key
    });
    Invocation.invokeClassMethod("Instabug","removeUserAttributeForKey:",[argKey]);
}

InstaBug.ios.native.userAttributes = function(){
    return Invocation.invokeClassMethod("Instabug","userAttributes",[],"id");
}

InstaBug.ios.native.logOut = function(){
    Invocation.invokeClassMethod("Instabug","logOut",[]);
}

InstaBug.ios.native.setShakingThresholdForiPhoneForiPad = function(iPhoneShakingThreshold,iPadShakingThreshold){
		var argiPhoneShakingThreshold = new Invocation.Argument({
        type:"double",
        value: iPhoneShakingThreshold
    });
    var argiPadShakingThreshold = new Invocation.Argument({
        type:"double",
        value: iPadShakingThreshold
    });
    Invocation.invokeClassMethod("Instabug","setShakingThresholdForiPhone:foriPad:",[argiPhoneShakingThreshold,argiPadShakingThreshold]);
};


InstaBug.ios.IBGInvocationEvent = {
	None : 0,
	Shake : 1,
	Screenshot : 2,
	TwoFingersSwipeLeft : 3,
	RightEdgePan : 4,
	FloatingButton : 5
}

InstaBug.ios.IBGColorTheme = {
	Light : 0,
	Dark : 1
}

InstaBug.ios.IBGInvocationMode = {
	NA : 0,
	BugReporter : 1,
	FeedbackSender : 2,
	NewBug : 3,
	NewFeedback : 4,
	NewChat : 5,
	ChatsList : 6
}

InstaBug.ios.IBGReportType = {
	Bug : 0,
	Feedback : 1
}

InstaBug.ios.IBGFeedbackType = {
	Bug : 0,
	Feedback : 1,
	Crash : 2
}

InstaBug.ios.IBGIssueState = {
	Submitted : 0,
	Cancelled : 1,
	InProgress : 2
}

InstaBug.ios.IBGDismissType = {
	Submit : 0,
	Cancel : 1,
	AddAttachment : 2
}

InstaBug.ios.IBGLocale = {
	Arabic : 0,
	ChineseSimplified : 1,
	ChineseTaiwan : 2,
	ChineseTraditional : 3,
	Czech : 4,
	Danish : 5,
	Dutch : 6,
	English : 7,
	French : 8,
	German : 9,
	Italian : 10,
	Japanese : 11,
	Korean : 12,
	Norwegian : 13,
	Polish : 14,
	Portugese : 15,
	PortugueseBrazil : 16,
	Russian : 17,
	Slovak : 18,
	Spanish : 19,
	Swedish : 20,
	Turkish : 21
}

InstaBug.ios.IBGPromptOption = {
	Chat : 0,
	Bug : 1,
	Feedback : 2
}

InstaBug.ios.IBGPosition = {
	BottomRight : 0,
	TopRight : 1,
	BottomLeft : 2,
	TopLeft : 3
}

InstaBug.ios.IBGString = {
	kIBGStartAlertTextStringName : "IBGStartAlertTextStringName",
	kIBGShakeStartAlertTextStringName : "ShakeStartAlertText",
	kIBGTwoFingerSwipeStartAlertTextStringName : "TwoFingerSwipeStartAlertText",
	kIBGEdgeSwipeStartAlertTextStringName : "EdgeSwipeStartAlertText",
	kIBGScreenshotStartAlertTextStringName : "ScreenshotStartAlertText",
	kIBGInvalidEmailMessageStringName : "invalidEmailAlertText",
	kIBGInvalidEmailTitleStringName : "invalidEmailAlertTitle",
	kIBGInvalidCommentMessageStringName : "invalidCommentAlertText",
	kIBGInvalidCommentTitleStringName : "invalidCommentAlertTitle",
	kIBGInvocationTitleStringName : "invocationHeaderLabelText",
	kIBGTalkToUsStringName : "talkToUsHeader",
	kIBGReportBugStringName : "bugHeader",
	kIBGReportFeedbackStringName : "feedbackHeader",
	kIBGEmailFieldPlaceholderStringName : "emailPlaceholder",
	kIBGCommentFieldPlaceholderForBugReportStringName : "bugCommentPlaceholder",
	kIBGCommentFieldPlaceholderForFeedbackStringName : "feedbackCommentPlaceholder",
	kIBGChatReplyFieldPlaceholderStringName : "replyPlaceholder",
	kIBGAddScreenRecordingMessageStringName : "attachmentActionSheetVideo",
	kIBGAddVoiceMessageStringName : "attachmentActionSheetVoiceNote",
	kIBGAddImageFromGalleryStringName : "attachmentActionSheetGallery",
	kIBGAddExtraScreenshotStringName : "attachmentActionSheetExtraScreenshot",
	kIBGAudioRecordingPermissionDeniedTitleStringName : "microphonePermissionAlertTitle",
	kIBGAudioRecordingPermissionDeniedMessageStringName : "microphonePermissionAlertMessage",
	kIBGScreenRecordingPermissionDeniedMessageStringName : "screenRecordingMicrophonePermissionAlertMessage",
	kIBGMicrophonePermissionAlertSettingsButtonTitleStringName : "microphonePermissionAlertSettingsButton",
	kIBGMicrophonePermissionAlertLaterButtonTitleStringName : "microphonePermissionAlertLaterButton",
	kIBGChatsTitleStringName : "chatsHeaderTitle",
	kIBGTeamStringName : "teamText",
	kIBGRecordingMessageToHoldTextStringName : "recordingMessageToHold",
	kIBGRecordingMessageToReleaseTextStringName : "recordingMessageToRelease",
	kIBGMessagesNotificationTitleSingleMessageStringName : "newMessagesNotificationText",
	kIBGMessagesNotificationTitleMultipleMessagesStringName : "newMessagesNotificationOthersText",
	kIBGScreenshotTitleStringName : "screenshotHeaderTitle",
	kIBGOkButtonTitleStringName : "okButton",
	kIBGSendButtonTitleStringName : "sendButton",
	kIBGCancelButtonTitleStringName : "cancelButton",
	kIBGThankYouAlertTitleStringName : "thankYou",
	kIBGThankYouAlertMessageStringName : "thankYouAlertText",
	kIBGAudioStringName : "audio",
	kIBGScreenRecordingStringName : "video",
	kIBGImageStringName : "image",
	kIBGReachedMaximimNumberOfAttachmentsTitleStringName : "reachedMaximimNumberOfAttachmentsTitleStringName",
	kIBGReachedMaximimNumberOfAttachmentsMessageStringName : "reachedMaximimNumberOfAttachmentsMessageStringName",
	kIBGVideoRecordingFailureMessageStringName : "videoRecordingFailureMessageStringName",
	kIBGSurveyEnterYourAnswerTextPlaceholder : "surveyEnterYourAnswerTextPlaceholder",
	kIBGSurveyNoAnswerTitle : "surveyNoAnswerTitle",
	kIBGSurveyNoAnswerMessage : "surveyNoAnswerMessage",
	kIBGSurveySubmitTitle : "surveySubmitTitle",
	kIBGVideoPressRecordTitle : "videoPressRecordTitle",
	kIBGCollectingDataText : "collectingDataText",
	kIBGLowDiskStorageTitle : "lowDiskStorageTitle",
	kIBGLowDiskStorageMessage : "lowDiskStorageMessage",
	kIBGInboundByLineMessage : "inboundByLineMessage",
	kIBGExtraFieldIsRequiredText : "extraFieldIsRequiredText",
	kIBGExtraFieldMissingDataText : "extraFieldMissingDataText"
}	

//////// Single Codebase //////////

InstaBug.InvocationEvent = {
	NONE : InstaBug.ios.IBGInvocationEvent.None,
	SHAKE : InstaBug.ios.IBGInvocationEvent.Shake,
	FLOATING_BUTTON : InstaBug.ios.IBGInvocationEvent.FloatingButton,
	SCREENSHOT_GESTURE : InstaBug.ios.IBGInvocationEvent.Screenshot,
	TWO_FINGER_SWIPE_LEFT : InstaBug.ios.IBGInvocationEvent.TwoFingersSwipeLeft
}

InstaBug.build = function(token,invocationEvent){
	InstaBug.ios.native.startWithTokenInvocationEvent(token,invocationEvent);
}

InstaBug.invoke = function(){
	InstaBug.ios.native.invoke();
}

InstaBug.InvocationMode = {
	NEW_BUG : InstaBug.ios.IBGInvocationMode.NewBug,
	NEW_FEEDBACK : InstaBug.ios.IBGInvocationMode.NewFeedback,
	NEW_CHAT : InstaBug.ios.IBGInvocationMode.NewChat,
	CHATS_LIST : InstaBug.ios.IBGInvocationMode.ChatsList
}

InstaBug.invokeWithInvocationMode = function(invocationMode){
	InstaBug.ios.native.invokeWithInvocationMode(invocationMode);
}

InstaBug.dismiss = function(){
	InstaBug.ios.native.dismiss();
}

InstaBug.setShakingThreshold = function(shakingThreshold){
	var iPhoneShakingThreshold = 2.5;
	var iPadShakingThreshold = 0.6;

	if (shakingThreshold && shakingThreshold.iphone) {
		iPhoneShakingThreshold = shakingThreshold.iphone;
	}

	if (shakingThreshold && shakingThreshold.ipad) {
		iPadShakingThreshold = shakingThreshold.ipad;
	}
	InstaBug.ios.native.setShakingThresholdForiPhoneForiPad(iPhoneShakingThreshold,iPadShakingThreshold);
}

InstaBug.Theme = {
	LIGHT : InstaBug.ios.IBGColorTheme.Light,
	DARK : InstaBug.ios.IBGColorTheme.Dark
}

InstaBug.setTheme = function(theme){
	InstaBug.ios.native.setColorTheme(theme);
}

InstaBug.setPrimaryColor = function(color){
	InstaBug.ios.native.setPrimaryColor(color.nativeObject);
}

InstaBug.showIntroMessage = function(){
	InstaBug.ios.native.showIntroMessage();
}

InstaBug.setPromptOptionsEnabled = function(chat,bug,feedback){
	InstaBug.ios.native.setPromptOptionsEnabledWithBugFeedbackChat(bug,feedback,chat);
}

InstaBug.identifyUser = function(name,email){
	InstaBug.ios.native.identifyUserWithEmailName(email,name);
}

InstaBug.setUserAttribute = function(key,value){
	InstaBug.ios.native.setUserAttributeWithKey(value,key);
}

InstaBug.removeUserAttribute = function(key){
	InstaBug.ios.native.removeUserAttributeForKey(key);
}

InstaBug.getAllUserAttributes = function(){
	return InstaBug.ios.native.userAttributes();
}

InstaBug.getUserAttribute = function(key){
	return InstaBug.ios.native.userAttributeForKey(key);
}

InstaBug.logoutUser = function(){
	InstaBug.ios.native.logOut();
}

InstaBug.Locale = InstaBug.ios.IBGLocale;

InstaBug.setLocale = function(locale){
	InstaBug.ios.native.setLocale(locale);
}

module.exports = InstaBug;