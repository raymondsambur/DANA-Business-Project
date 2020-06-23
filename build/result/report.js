$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.scenario({
  "name": "1. user login with correct phone number and password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Valid"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577665\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssw0rd\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userClickSignInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User directed to Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userDirectedToHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2. user login with correct phone number but incorrect password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577665\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssword123\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userClickSignInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Invalid Phone Number or Password\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for presence of element located by: By.id: textinput_error (tried for 50 second(s) with 500 milliseconds interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\n\tat project.PageFunctions.waitABit(PageFunctions.java:14)\n\tat project.pages.LoginPage.checkWarningText(LoginPage.java:34)\n\tat project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(LoginStepDefinition.java:45)\n\tat ✽.User see error message \"Invalid Phone Number or Password\"(file:///Users/chenr/IdeaProjects/DANA-Business-Project/src/test/resources/features/Login.feature:19)\nCaused by: org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027dnid0666l01.local\u0027, ip: \u0027fe80:0:0:0:104e:4346:c63d:a4b7%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: /Users/chenr/IdeaProjects/D..., appPackage: com.alfikri.rizky.danabusin..., autoGrantPermissions: true, automationName: UiAutomator2, databaseEnabled: false, desired: {app: /Users/chenr/IdeaProjects/D..., autoGrantPermissions: true, automationName: UiAutomator2, deviceName: device, platformName: android, platformVersion: 6.0, udid: emulator-5554}, deviceApiLevel: 23, deviceManufacturer: unknown, deviceModel: Android SDK built for x86, deviceName: emulator-5554, deviceScreenDensity: 420, deviceScreenSize: 1080x1920, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, pixelRatio: 2.625, platform: LINUX, platformName: Android, platformVersion: 6.0, statBarHeight: 63, takesScreenshot: true, udid: emulator-5554, viewportRect: {height: 1731, left: 0, top: 63, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: e840de51-c203-49de-ab0b-6ec8e78bc223\n*** Element info: {Using\u003did, value\u003dtextinput_error}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementById(DefaultGenericMobileDriver.java:69)\n\tat io.appium.java_client.AppiumDriver.findElementById(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElementById(AndroidDriver.java:1)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:182)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:179)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\n\tat project.PageFunctions.waitABit(PageFunctions.java:14)\n\tat project.pages.LoginPage.checkWarningText(LoginPage.java:34)\n\tat project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(LoginStepDefinition.java:45)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\n\tat io.cucumber.junit.PickleRunners$WithStepDescriptions.run(PickleRunners.java:100)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.runTestClass(JUnitTestClassExecutor.java:110)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.execute(JUnitTestClassExecutor.java:58)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.execute(JUnitTestClassExecutor.java:38)\n\tat org.gradle.api.internal.tasks.testing.junit.AbstractJUnitTestClassProcessor.processTestClass(AbstractJUnitTestClassProcessor.java:62)\n\tat org.gradle.api.internal.tasks.testing.SuiteTestClassProcessor.processTestClass(SuiteTestClassProcessor.java:51)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.dispatch.ContextClassLoaderDispatch.dispatch(ContextClassLoaderDispatch.java:32)\n\tat org.gradle.internal.dispatch.ProxyDispatchAdapter$DispatchingInvocationHandler.invoke(ProxyDispatchAdapter.java:93)\n\tat com.sun.proxy.$Proxy2.processTestClass(Unknown Source)\n\tat org.gradle.api.internal.tasks.testing.worker.TestWorker.processTestClass(TestWorker.java:118)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:175)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:157)\n\tat org.gradle.internal.remote.internal.hub.MessageHub$Handler.run(MessageHub.java:404)\n\tat org.gradle.internal.concurrent.ExecutorPolicy$CatchAndRecordFailures.onExecute(ExecutorPolicy.java:63)\n\tat org.gradle.internal.concurrent.ManagedExecutorImpl$1.run(ManagedExecutorImpl.java:46)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\n\tat org.gradle.internal.concurrent.ThreadFactoryImpl$ManagedThreadRunnable.run(ThreadFactoryImpl.java:55)\n\tat java.lang.Thread.run(Thread.java:748)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.write("scenario Fail");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "3. user login with incorrect phone number but correct password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577000\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssw0rd\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userClickSignInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Invalid Phone Number or Password\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for presence of element located by: By.id: textinput_error (tried for 50 second(s) with 500 milliseconds interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\n\tat project.PageFunctions.waitABit(PageFunctions.java:14)\n\tat project.pages.LoginPage.checkWarningText(LoginPage.java:34)\n\tat project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(LoginStepDefinition.java:45)\n\tat ✽.User see error message \"Invalid Phone Number or Password\"(file:///Users/chenr/IdeaProjects/DANA-Business-Project/src/test/resources/features/Login.feature:26)\nCaused by: org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027dnid0666l01.local\u0027, ip: \u0027fe80:0:0:0:104e:4346:c63d:a4b7%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: /Users/chenr/IdeaProjects/D..., appPackage: com.alfikri.rizky.danabusin..., autoGrantPermissions: true, automationName: UiAutomator2, databaseEnabled: false, desired: {app: /Users/chenr/IdeaProjects/D..., autoGrantPermissions: true, automationName: UiAutomator2, deviceName: device, platformName: android, platformVersion: 6.0, udid: emulator-5554}, deviceApiLevel: 23, deviceManufacturer: unknown, deviceModel: Android SDK built for x86, deviceName: emulator-5554, deviceScreenDensity: 420, deviceScreenSize: 1080x1920, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, pixelRatio: 2.625, platform: LINUX, platformName: Android, platformVersion: 6.0, statBarHeight: 63, takesScreenshot: true, udid: emulator-5554, viewportRect: {height: 1731, left: 0, top: 63, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: e71fe519-961e-462e-8d3a-2bbd9d3f8649\n*** Element info: {Using\u003did, value\u003dtextinput_error}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementById(DefaultGenericMobileDriver.java:69)\n\tat io.appium.java_client.AppiumDriver.findElementById(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElementById(AndroidDriver.java:1)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:182)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:179)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\n\tat project.PageFunctions.waitABit(PageFunctions.java:14)\n\tat project.pages.LoginPage.checkWarningText(LoginPage.java:34)\n\tat project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(LoginStepDefinition.java:45)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\n\tat io.cucumber.junit.PickleRunners$WithStepDescriptions.run(PickleRunners.java:100)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.runTestClass(JUnitTestClassExecutor.java:110)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.execute(JUnitTestClassExecutor.java:58)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.execute(JUnitTestClassExecutor.java:38)\n\tat org.gradle.api.internal.tasks.testing.junit.AbstractJUnitTestClassProcessor.processTestClass(AbstractJUnitTestClassProcessor.java:62)\n\tat org.gradle.api.internal.tasks.testing.SuiteTestClassProcessor.processTestClass(SuiteTestClassProcessor.java:51)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.dispatch.ContextClassLoaderDispatch.dispatch(ContextClassLoaderDispatch.java:32)\n\tat org.gradle.internal.dispatch.ProxyDispatchAdapter$DispatchingInvocationHandler.invoke(ProxyDispatchAdapter.java:93)\n\tat com.sun.proxy.$Proxy2.processTestClass(Unknown Source)\n\tat org.gradle.api.internal.tasks.testing.worker.TestWorker.processTestClass(TestWorker.java:118)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:175)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:157)\n\tat org.gradle.internal.remote.internal.hub.MessageHub$Handler.run(MessageHub.java:404)\n\tat org.gradle.internal.concurrent.ExecutorPolicy$CatchAndRecordFailures.onExecute(ExecutorPolicy.java:63)\n\tat org.gradle.internal.concurrent.ManagedExecutorImpl$1.run(ManagedExecutorImpl.java:46)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\n\tat org.gradle.internal.concurrent.ThreadFactoryImpl$ManagedThreadRunnable.run(ThreadFactoryImpl.java:55)\n\tat java.lang.Thread.run(Thread.java:748)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.write("scenario Fail");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "4. user login with incorrect phone number and password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577000\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssword123\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userClickSignInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Invalid Phone Number or Password\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for presence of element located by: By.id: textinput_error (tried for 50 second(s) with 500 milliseconds interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\n\tat project.PageFunctions.waitABit(PageFunctions.java:14)\n\tat project.pages.LoginPage.checkWarningText(LoginPage.java:34)\n\tat project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(LoginStepDefinition.java:45)\n\tat ✽.User see error message \"Invalid Phone Number or Password\"(file:///Users/chenr/IdeaProjects/DANA-Business-Project/src/test/resources/features/Login.feature:33)\nCaused by: org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027dnid0666l01.local\u0027, ip: \u0027fe80:0:0:0:104e:4346:c63d:a4b7%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: /Users/chenr/IdeaProjects/D..., appPackage: com.alfikri.rizky.danabusin..., autoGrantPermissions: true, automationName: UiAutomator2, databaseEnabled: false, desired: {app: /Users/chenr/IdeaProjects/D..., autoGrantPermissions: true, automationName: UiAutomator2, deviceName: device, platformName: android, platformVersion: 6.0, udid: emulator-5554}, deviceApiLevel: 23, deviceManufacturer: unknown, deviceModel: Android SDK built for x86, deviceName: emulator-5554, deviceScreenDensity: 420, deviceScreenSize: 1080x1920, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, pixelRatio: 2.625, platform: LINUX, platformName: Android, platformVersion: 6.0, statBarHeight: 63, takesScreenshot: true, udid: emulator-5554, viewportRect: {height: 1731, left: 0, top: 63, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 80d1d307-2c6d-446c-8cd0-973908b65d4d\n*** Element info: {Using\u003did, value\u003dtextinput_error}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementById(DefaultGenericMobileDriver.java:69)\n\tat io.appium.java_client.AppiumDriver.findElementById(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElementById(AndroidDriver.java:1)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:182)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:179)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\n\tat project.PageFunctions.waitABit(PageFunctions.java:14)\n\tat project.pages.LoginPage.checkWarningText(LoginPage.java:34)\n\tat project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(LoginStepDefinition.java:45)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\n\tat io.cucumber.junit.PickleRunners$WithStepDescriptions.run(PickleRunners.java:100)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.runTestClass(JUnitTestClassExecutor.java:110)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.execute(JUnitTestClassExecutor.java:58)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.execute(JUnitTestClassExecutor.java:38)\n\tat org.gradle.api.internal.tasks.testing.junit.AbstractJUnitTestClassProcessor.processTestClass(AbstractJUnitTestClassProcessor.java:62)\n\tat org.gradle.api.internal.tasks.testing.SuiteTestClassProcessor.processTestClass(SuiteTestClassProcessor.java:51)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.dispatch.ContextClassLoaderDispatch.dispatch(ContextClassLoaderDispatch.java:32)\n\tat org.gradle.internal.dispatch.ProxyDispatchAdapter$DispatchingInvocationHandler.invoke(ProxyDispatchAdapter.java:93)\n\tat com.sun.proxy.$Proxy2.processTestClass(Unknown Source)\n\tat org.gradle.api.internal.tasks.testing.worker.TestWorker.processTestClass(TestWorker.java:118)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:175)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:157)\n\tat org.gradle.internal.remote.internal.hub.MessageHub$Handler.run(MessageHub.java:404)\n\tat org.gradle.internal.concurrent.ExecutorPolicy$CatchAndRecordFailures.onExecute(ExecutorPolicy.java:63)\n\tat org.gradle.internal.concurrent.ManagedExecutorImpl$1.run(ManagedExecutorImpl.java:46)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\n\tat org.gradle.internal.concurrent.ThreadFactoryImpl$ManagedThreadRunnable.run(ThreadFactoryImpl.java:55)\n\tat java.lang.Thread.run(Thread.java:748)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.write("scenario Fail");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "5. user login with empty phone number but correct password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssw0rd\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Phone Number cannot be empty!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "6. user login with 8 digits phone number but correct password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81300000\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssw0rd\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Wrong Phone Number format! Must starts with 8, contains numbers and 9 – 12 digits!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "7. user login with 13 digits phone number but correct password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"8130000000000\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssw0rd\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Wrong Phone Number format! Must starts with 8, contains numbers and 9 – 12 digits!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "8 - 12. user login with non-numerical phone number but correct password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Invalid"
    },
    {
      "name": "@Nyoba"
    }
  ]
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "User input phone number \"\u003cphone number\u003e\" on phone number field",
  "keyword": "When "
});
formatter.step({
  "name": "User input password \"\u003cpassword\u003e\" on password field",
  "keyword": "And "
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.step({
  "name": "User see error message \"\u003cerror message\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "phone number",
        "password",
        "error message"
      ]
    },
    {
      "cells": [
        "813abcd00",
        "P@ssw0rd",
        "Wrong Phone Number format! Must starts with 8, contains numbers and 9 – 12 digits!"
      ]
    },
    {
      "cells": [
        "abcdefghi",
        "P@ssw0rd",
        "Wrong Phone Number format! Must starts with 8, contains numbers and 9 – 12 digits!"
      ]
    },
    {
      "cells": [
        "81300000!",
        "P@ssw0rd",
        "Wrong Phone Number format! Must starts with 8, contains numbers and 9 – 12 digits!"
      ]
    },
    {
      "cells": [
        "!@#$%^\u0026*(",
        "P@ssw0rd",
        "Wrong Phone Number format! Must starts with 8, contains numbers and 9 – 12 digits!"
      ]
    },
    {
      "cells": [
        "😭",
        "P@ssw0rd",
        "Wrong Phone Number format! Must starts with 8, contains numbers and 9 – 12 digits!"
      ]
    }
  ]
});
formatter.scenario({
  "name": "8 - 12. user login with non-numerical phone number but correct password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    },
    {
      "name": "@Nyoba"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"813abcd00\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssw0rd\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Wrong Phone Number format! Must starts with 8, contains numbers and 9 – 12 digits!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "8 - 12. user login with non-numerical phone number but correct password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    },
    {
      "name": "@Nyoba"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"abcdefghi\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssw0rd\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Wrong Phone Number format! Must starts with 8, contains numbers and 9 – 12 digits!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "8 - 12. user login with non-numerical phone number but correct password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    },
    {
      "name": "@Nyoba"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81300000!\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssw0rd\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Wrong Phone Number format! Must starts with 8, contains numbers and 9 – 12 digits!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "8 - 12. user login with non-numerical phone number but correct password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    },
    {
      "name": "@Nyoba"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"!@#$%^\u0026*(\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssw0rd\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Wrong Phone Number format! Must starts with 8, contains numbers and 9 – 12 digits!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "8 - 12. user login with non-numerical phone number but correct password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    },
    {
      "name": "@Nyoba"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"😭\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssw0rd\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Wrong Phone Number format! Must starts with 8, contains numbers and 9 – 12 digits!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "13. user login with prefix 62 phone number but correct password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"62813000000\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssw0rd\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Wrong Phone Number format! Must starts with 8, contains numbers and 9 – 12 digits!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "14. user login with prefix 0 phone number but correct password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"08130000000\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssw0rd\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Wrong Phone Number format! Must starts with 8, contains numbers and 9 – 12 digits!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "15. user login with correct phone number but empty password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577665\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password cannot be empty!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "16. user login with correct phone number but 7 digits password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577665\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssw0r\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "17. user login with correct phone number but 21 digits password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577665\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssw0rd1234567890abc\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:87)\n\tat org.junit.Assert.assertTrue(Assert.java:42)\n\tat org.junit.Assert.assertFalse(Assert.java:65)\n\tat org.junit.Assert.assertFalse(Assert.java:75)\n\tat project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage(LoginStepDefinition.java:58)\n\tat ✽.User cannot click Sign In button on Login Page(file:///Users/chenr/IdeaProjects/DANA-Business-Project/src/test/resources/features/Login.feature:112)\n",
  "status": "failed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.write("scenario Fail");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "18 - 33. user login with corret phone number but invalid password format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Invalid"
    },
    {
      "name": "@Scenario"
    }
  ]
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "User input phone number \"\u003cphone number\u003e\" on phone number field",
  "keyword": "When "
});
formatter.step({
  "name": "User input password \"\u003cpassword\u003e\" on password field",
  "keyword": "And "
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "phone number",
        "password"
      ]
    },
    {
      "cells": [
        "81394577665",
        "Passw0rd"
      ]
    },
    {
      "cells": [
        "81394577665",
        "P@ssword"
      ]
    },
    {
      "cells": [
        "81394577665",
        "Password"
      ]
    },
    {
      "cells": [
        "81394577665",
        "p@ssw0rd"
      ]
    },
    {
      "cells": [
        "81394577665",
        "passw0rd"
      ]
    },
    {
      "cells": [
        "81394577665",
        "p@ssword"
      ]
    },
    {
      "cells": [
        "81394577665",
        "password"
      ]
    },
    {
      "cells": [
        "81394577665",
        "P@SSW0RD"
      ]
    },
    {
      "cells": [
        "81394577665",
        "PASSW0RD"
      ]
    },
    {
      "cells": [
        "81394577665",
        "P@SSWORD"
      ]
    },
    {
      "cells": [
        "81394577665",
        "PASSWORD"
      ]
    },
    {
      "cells": [
        "81394577665",
        "123$%^78"
      ]
    },
    {
      "cells": [
        "81394577665",
        "12345678"
      ]
    },
    {
      "cells": [
        "81394577665",
        "!@#$%^\u0026*"
      ]
    },
    {
      "cells": [
        "81394577665",
        "P@ss w0rd"
      ]
    },
    {
      "cells": [
        "81394577665",
        "P@ssw0rd😭"
      ]
    }
  ]
});
formatter.scenario({
  "name": "18 - 33. user login with corret phone number but invalid password format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    },
    {
      "name": "@Scenario"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577665\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"Passw0rd\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "18 - 33. user login with corret phone number but invalid password format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    },
    {
      "name": "@Scenario"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577665\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssword\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "18 - 33. user login with corret phone number but invalid password format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    },
    {
      "name": "@Scenario"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577665\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"Password\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "18 - 33. user login with corret phone number but invalid password format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    },
    {
      "name": "@Scenario"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577665\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"p@ssw0rd\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "18 - 33. user login with corret phone number but invalid password format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    },
    {
      "name": "@Scenario"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577665\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"passw0rd\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "18 - 33. user login with corret phone number but invalid password format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    },
    {
      "name": "@Scenario"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577665\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"p@ssword\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "18 - 33. user login with corret phone number but invalid password format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    },
    {
      "name": "@Scenario"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577665\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"password\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "18 - 33. user login with corret phone number but invalid password format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    },
    {
      "name": "@Scenario"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577665\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@SSW0RD\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "18 - 33. user login with corret phone number but invalid password format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    },
    {
      "name": "@Scenario"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577665\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"PASSW0RD\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "18 - 33. user login with corret phone number but invalid password format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    },
    {
      "name": "@Scenario"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577665\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@SSWORD\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "18 - 33. user login with corret phone number but invalid password format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    },
    {
      "name": "@Scenario"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577665\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"PASSWORD\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "18 - 33. user login with corret phone number but invalid password format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    },
    {
      "name": "@Scenario"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577665\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"123$%^78\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "18 - 33. user login with corret phone number but invalid password format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    },
    {
      "name": "@Scenario"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577665\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"12345678\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "18 - 33. user login with corret phone number but invalid password format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    },
    {
      "name": "@Scenario"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577665\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"!@#$%^\u0026*\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "18 - 33. user login with corret phone number but invalid password format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    },
    {
      "name": "@Scenario"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577665\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ss w0rd\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:87)\n\tat org.junit.Assert.assertTrue(Assert.java:42)\n\tat org.junit.Assert.assertFalse(Assert.java:65)\n\tat org.junit.Assert.assertFalse(Assert.java:75)\n\tat project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage(LoginStepDefinition.java:58)\n\tat ✽.User cannot click Sign In button on Login Page(file:///Users/chenr/IdeaProjects/DANA-Business-Project/src/test/resources/features/Login.feature:120)\n",
  "status": "failed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded4.png", null);
formatter.write("scenario Fail");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "18 - 33. user login with corret phone number but invalid password format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    },
    {
      "name": "@Scenario"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577665\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssw0rd😭\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:87)\n\tat org.junit.Assert.assertTrue(Assert.java:42)\n\tat org.junit.Assert.assertFalse(Assert.java:65)\n\tat org.junit.Assert.assertFalse(Assert.java:75)\n\tat project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage(LoginStepDefinition.java:58)\n\tat ✽.User cannot click Sign In button on Login Page(file:///Users/chenr/IdeaProjects/DANA-Business-Project/src/test/resources/features/Login.feature:120)\n",
  "status": "failed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded5.png", null);
formatter.write("scenario Fail");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input valid format phone number",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PhoneField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577665\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see no error message",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeNoErrorMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User left empty phone number",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PhoneField"
    },
    {
      "name": "@1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Phone Number cannot be empty!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User input invalid format phone number",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PhoneField"
    }
  ]
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "User input phone number \"\u003cphone number\u003e\" on phone number field",
  "keyword": "When "
});
formatter.step({
  "name": "User see error message \"Wrong Phone Number format! Must starts with 8, contains numbers and 9 – 12 digits!\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "phone number"
      ]
    },
    {
      "cells": [
        "81300000"
      ]
    },
    {
      "cells": [
        "8130000000000"
      ]
    },
    {
      "cells": [
        "813abcd00"
      ]
    },
    {
      "cells": [
        "abcdefghi"
      ]
    },
    {
      "cells": [
        "81300000!"
      ]
    },
    {
      "cells": [
        "!@#$%^\u0026*("
      ]
    },
    {
      "cells": [
        "😭"
      ]
    },
    {
      "cells": [
        "62813000000"
      ]
    },
    {
      "cells": [
        "08130000000"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User input invalid format phone number",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PhoneField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81300000\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Wrong Phone Number format! Must starts with 8, contains numbers and 9 – 12 digits!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format phone number",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PhoneField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"8130000000000\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Wrong Phone Number format! Must starts with 8, contains numbers and 9 – 12 digits!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format phone number",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PhoneField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"813abcd00\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Wrong Phone Number format! Must starts with 8, contains numbers and 9 – 12 digits!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format phone number",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PhoneField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"abcdefghi\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Wrong Phone Number format! Must starts with 8, contains numbers and 9 – 12 digits!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format phone number",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PhoneField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81300000!\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Wrong Phone Number format! Must starts with 8, contains numbers and 9 – 12 digits!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format phone number",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PhoneField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"!@#$%^\u0026*(\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Wrong Phone Number format! Must starts with 8, contains numbers and 9 – 12 digits!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format phone number",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PhoneField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"😭\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Wrong Phone Number format! Must starts with 8, contains numbers and 9 – 12 digits!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format phone number",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PhoneField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"62813000000\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Wrong Phone Number format! Must starts with 8, contains numbers and 9 – 12 digits!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format phone number",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PhoneField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"08130000000\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Wrong Phone Number format! Must starts with 8, contains numbers and 9 – 12 digits!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input valid format password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PasswordField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssw0rd\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see no error message",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeNoErrorMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User left empty password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PasswordField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password cannot be empty!\" on password field",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessageOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User input invalid format password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PasswordField"
    }
  ]
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "User input password \"\u003cpassword\u003e\" on password field",
  "keyword": "When "
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\" on password field",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "password"
      ]
    },
    {
      "cells": [
        "P@ssw0r"
      ]
    },
    {
      "cells": [
        "P@ssw0rd1234567890abc"
      ]
    },
    {
      "cells": [
        "Passw0rd"
      ]
    },
    {
      "cells": [
        "P@ssword"
      ]
    },
    {
      "cells": [
        "Password"
      ]
    },
    {
      "cells": [
        "p@ssw0rd"
      ]
    },
    {
      "cells": [
        "passw0rd"
      ]
    },
    {
      "cells": [
        "p@ssword"
      ]
    },
    {
      "cells": [
        "password"
      ]
    },
    {
      "cells": [
        "P@SSW0RD"
      ]
    },
    {
      "cells": [
        "PASSW0RD"
      ]
    },
    {
      "cells": [
        "P@SSWORD"
      ]
    },
    {
      "cells": [
        "PASSWORD"
      ]
    },
    {
      "cells": [
        "123$%^78"
      ]
    },
    {
      "cells": [
        "12345678"
      ]
    },
    {
      "cells": [
        "!@#$%^\u0026*"
      ]
    },
    {
      "cells": [
        "P@ss w0rd"
      ]
    },
    {
      "cells": [
        "P@ssw0rd😭"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User input invalid format password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PasswordField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssw0r\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\" on password field",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessageOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PasswordField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssw0rd1234567890abc\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\" on password field",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessageOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027dnid0666l01.local\u0027, ip: \u0027fe80:0:0:0:104e:4346:c63d:a4b7%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: /Users/chenr/IdeaProjects/D..., appPackage: com.alfikri.rizky.danabusin..., autoGrantPermissions: true, automationName: UiAutomator2, databaseEnabled: false, desired: {app: /Users/chenr/IdeaProjects/D..., autoGrantPermissions: true, automationName: UiAutomator2, deviceName: device, platformName: android, platformVersion: 6.0, udid: emulator-5554}, deviceApiLevel: 23, deviceManufacturer: unknown, deviceModel: Android SDK built for x86, deviceName: emulator-5554, deviceScreenDensity: 420, deviceScreenSize: 1080x1920, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, pixelRatio: 2.625, platform: LINUX, platformName: Android, platformVersion: 6.0, statBarHeight: 63, takesScreenshot: true, udid: emulator-5554, viewportRect: {height: 1731, left: 0, top: 63, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 741a031c-902a-4e3c-9754-1885f94326e7\n*** Element info: {Using\u003dxpath, value\u003d//android.widget.TextView[contains(@text, \u0027Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\u0027)]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:151)\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElementByXPath(AndroidDriver.java:1)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat project.pages.LoginPage.getWarningTextPassword(LoginPage.java:47)\n\tat project.stepsdefinition.LoginStepDefinition.userSeeErrorMessageOnPhoneNumberField(LoginStepDefinition.java:106)\n\tat ✽.User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\" on password field(file:///Users/chenr/IdeaProjects/DANA-Business-Project/src/test/resources/features/Login.feature:205)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded6.png", null);
formatter.write("scenario Fail");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PasswordField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"Passw0rd\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\" on password field",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessageOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PasswordField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssword\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\" on password field",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessageOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PasswordField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"Password\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\" on password field",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessageOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PasswordField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"p@ssw0rd\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\" on password field",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessageOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PasswordField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"passw0rd\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\" on password field",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessageOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PasswordField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"p@ssword\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\" on password field",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessageOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PasswordField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"password\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\" on password field",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessageOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PasswordField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@SSW0RD\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\" on password field",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessageOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PasswordField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"PASSW0RD\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\" on password field",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessageOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PasswordField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@SSWORD\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\" on password field",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessageOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PasswordField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"PASSWORD\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\" on password field",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessageOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PasswordField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"123$%^78\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\" on password field",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessageOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PasswordField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"12345678\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\" on password field",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessageOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PasswordField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"!@#$%^\u0026*\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\" on password field",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessageOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PasswordField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ss w0rd\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\" on password field",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessageOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027dnid0666l01.local\u0027, ip: \u0027fe80:0:0:0:104e:4346:c63d:a4b7%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: /Users/chenr/IdeaProjects/D..., appPackage: com.alfikri.rizky.danabusin..., autoGrantPermissions: true, automationName: UiAutomator2, databaseEnabled: false, desired: {app: /Users/chenr/IdeaProjects/D..., autoGrantPermissions: true, automationName: UiAutomator2, deviceName: device, platformName: android, platformVersion: 6.0, udid: emulator-5554}, deviceApiLevel: 23, deviceManufacturer: unknown, deviceModel: Android SDK built for x86, deviceName: emulator-5554, deviceScreenDensity: 420, deviceScreenSize: 1080x1920, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, pixelRatio: 2.625, platform: LINUX, platformName: Android, platformVersion: 6.0, statBarHeight: 63, takesScreenshot: true, udid: emulator-5554, viewportRect: {height: 1731, left: 0, top: 63, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 6b3c15a4-fdfd-4517-bcd7-4791dd386c56\n*** Element info: {Using\u003dxpath, value\u003d//android.widget.TextView[contains(@text, \u0027Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\u0027)]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:151)\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElementByXPath(AndroidDriver.java:1)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat project.pages.LoginPage.getWarningTextPassword(LoginPage.java:47)\n\tat project.stepsdefinition.LoginStepDefinition.userSeeErrorMessageOnPhoneNumberField(LoginStepDefinition.java:106)\n\tat ✽.User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\" on password field(file:///Users/chenr/IdeaProjects/DANA-Business-Project/src/test/resources/features/Login.feature:205)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded7.png", null);
formatter.write("scenario Fail");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PasswordField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssw0rd😭\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\" on password field",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessageOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027dnid0666l01.local\u0027, ip: \u0027fe80:0:0:0:104e:4346:c63d:a4b7%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: /Users/chenr/IdeaProjects/D..., appPackage: com.alfikri.rizky.danabusin..., autoGrantPermissions: true, automationName: UiAutomator2, databaseEnabled: false, desired: {app: /Users/chenr/IdeaProjects/D..., autoGrantPermissions: true, automationName: UiAutomator2, deviceName: device, platformName: android, platformVersion: 6.0, udid: emulator-5554}, deviceApiLevel: 23, deviceManufacturer: unknown, deviceModel: Android SDK built for x86, deviceName: emulator-5554, deviceScreenDensity: 420, deviceScreenSize: 1080x1920, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, pixelRatio: 2.625, platform: LINUX, platformName: Android, platformVersion: 6.0, statBarHeight: 63, takesScreenshot: true, udid: emulator-5554, viewportRect: {height: 1731, left: 0, top: 63, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 3f6850e7-c8f8-4fbc-8de5-4037dc53a960\n*** Element info: {Using\u003dxpath, value\u003d//android.widget.TextView[contains(@text, \u0027Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\u0027)]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:151)\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElementByXPath(AndroidDriver.java:1)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat project.pages.LoginPage.getWarningTextPassword(LoginPage.java:47)\n\tat project.stepsdefinition.LoginStepDefinition.userSeeErrorMessageOnPhoneNumberField(LoginStepDefinition.java:106)\n\tat ✽.User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\" on password field(file:///Users/chenr/IdeaProjects/DANA-Business-Project/src/test/resources/features/Login.feature:205)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded8.png", null);
formatter.write("scenario Fail");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input password and click hide/show password button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Show"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssw0rd\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click show password button",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userClickHideShowPasswordButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see \"P@ssw0rd\" on password field",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeOnPasswordField(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003cP@ssw0rd[]\u003e but was:\u003cP@ssw0rd[, Password]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:117)\n\tat org.junit.Assert.assertEquals(Assert.java:146)\n\tat project.stepsdefinition.LoginStepDefinition.userSeeOnPasswordField(LoginStepDefinition.java:80)\n\tat ✽.User see \"P@ssw0rd\" on password field(file:///Users/chenr/IdeaProjects/DANA-Business-Project/src/test/resources/features/Login.feature:234)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded9.png", null);
formatter.write("scenario Fail");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input password and didn\u0027t click hide/show password button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Show"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssw0rd\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see password is masked",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeePasswordIsMasked()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format password and click hide/show password button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Show"
    },
    {
      "name": "@2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssw0r\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click show password button",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userClickHideShowPasswordButton()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027dnid0666l01.local\u0027, ip: \u0027fe80:0:0:0:104e:4346:c63d:a4b7%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: /Users/chenr/IdeaProjects/D..., appPackage: com.alfikri.rizky.danabusin..., autoGrantPermissions: true, automationName: UiAutomator2, databaseEnabled: false, desired: {app: /Users/chenr/IdeaProjects/D..., autoGrantPermissions: true, automationName: UiAutomator2, deviceName: device, platformName: android, platformVersion: 6.0, udid: emulator-5554}, deviceApiLevel: 23, deviceManufacturer: unknown, deviceModel: Android SDK built for x86, deviceName: emulator-5554, deviceScreenDensity: 420, deviceScreenSize: 1080x1920, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, pixelRatio: 2.625, platform: LINUX, platformName: Android, platformVersion: 6.0, statBarHeight: 63, takesScreenshot: true, udid: emulator-5554, viewportRect: {height: 1731, left: 0, top: 63, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 7663bd84-6036-4e59-8cce-348e4f557ff0\n*** Element info: {Using\u003dxpath, value\u003d//android.widget.ImageButton[@content-desc\u003d\u0027Show password\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:151)\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElementByXPath(AndroidDriver.java:1)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat project.pages.LoginPage.clickHideShowPassButton(LoginPage.java:58)\n\tat project.stepsdefinition.LoginStepDefinition.userClickHideShowPasswordButton(LoginStepDefinition.java:73)\n\tat ✽.User click show password button(file:///Users/chenr/IdeaProjects/DANA-Business-Project/src/test/resources/features/Login.feature:247)\n",
  "status": "failed"
});
formatter.step({
  "name": "User see \"P@ssw0r\" on password field",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded10.png", null);
formatter.write("scenario Fail");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format password and click hide/show password button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Show"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssw0r\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see password is masked",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeePasswordIsMasked()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User wants to Forgot his own Password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@forpassbutton"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Forgot Password button",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userClickForgotPasswordButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User directed to Forgot Password Page",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userDirectedToForgotPasswordPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User wants to create new account",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@registerbutton"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Register button",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userClickRegisterButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User directed to Register Page",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userDirectedToRegisterPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});