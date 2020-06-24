$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/MyAccount.feature");
formatter.feature({
  "name": "My Account",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@MyAccount"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
  "keyword": "And "
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
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.ChangePasswordStepDefinition.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap My Account button on Home page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.ChangePasswordStepDefinition.userTapMyAccountButtonOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Go to Change Password page by tapping Change Password button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@MyAccount"
    },
    {
      "name": "@VerifyChangePasswordButtonFunction"
    }
  ]
});
formatter.step({
  "name": "User is on My Account page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.ChangePasswordStepDefinition.userIsOnMyAccountPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Change Password button on My Account page",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.ChangePasswordStepDefinition.userTapChangePasswordButtonOnMyAccountPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on Change Password page",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.ChangePasswordStepDefinition.userIsOnChangePasswordPage()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for presence of element located by: By.id: tvChangePasswordTitle (tried for 10 second(s) with 500 milliseconds interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\n\tat project.PageFunctions.waitABit(PageFunctions.java:14)\n\tat project.pages.ChangePasswordPage.onChangePasswordPage(ChangePasswordPage.java:11)\n\tat project.stepsdefinition.ChangePasswordStepDefinition.userIsOnChangePasswordPage(ChangePasswordStepDefinition.java:39)\n\tat ✽.User is on Change Password page(file:///Users/samburr/IdeaProjects/DANA%20Business%20Project/src/test/resources/features/MyAccount.feature:16)\nCaused by: org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027dnid0652l01.local\u0027, ip: \u0027fe80:0:0:0:14e4:2137:90fd:c027%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.5\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: /Users/samburr/IdeaProjects..., appPackage: com.alfikri.rizky.danabusin..., autoGrantPermissions: true, automationName: UiAutomator2, databaseEnabled: false, desired: {app: /Users/samburr/IdeaProjects..., autoGrantPermissions: true, automationName: UiAutomator2, deviceName: device, platformName: android, platformVersion: 6.0, udid: emulator-5554}, deviceApiLevel: 23, deviceManufacturer: unknown, deviceModel: Android SDK built for x86, deviceName: emulator-5554, deviceScreenDensity: 420, deviceScreenSize: 1080x1920, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, pixelRatio: 2.625, platform: LINUX, platformName: Android, platformVersion: 6.0, statBarHeight: 63, takesScreenshot: true, udid: emulator-5554, viewportRect: {height: 1731, left: 0, top: 63, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 90226bb6-2f1c-416e-a78b-68a0b0d3c28b\n*** Element info: {Using\u003did, value\u003dtvChangePasswordTitle}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementById(DefaultGenericMobileDriver.java:69)\n\tat io.appium.java_client.AppiumDriver.findElementById(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElementById(AndroidDriver.java:1)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:182)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:179)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\n\tat project.PageFunctions.waitABit(PageFunctions.java:14)\n\tat project.pages.ChangePasswordPage.onChangePasswordPage(ChangePasswordPage.java:11)\n\tat project.stepsdefinition.ChangePasswordStepDefinition.userIsOnChangePasswordPage(ChangePasswordStepDefinition.java:39)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\n\tat io.cucumber.junit.PickleRunners$WithStepDescriptions.run(PickleRunners.java:100)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.runTestClass(JUnitTestClassExecutor.java:110)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.execute(JUnitTestClassExecutor.java:58)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.execute(JUnitTestClassExecutor.java:38)\n\tat org.gradle.api.internal.tasks.testing.junit.AbstractJUnitTestClassProcessor.processTestClass(AbstractJUnitTestClassProcessor.java:62)\n\tat org.gradle.api.internal.tasks.testing.SuiteTestClassProcessor.processTestClass(SuiteTestClassProcessor.java:51)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.dispatch.ContextClassLoaderDispatch.dispatch(ContextClassLoaderDispatch.java:32)\n\tat org.gradle.internal.dispatch.ProxyDispatchAdapter$DispatchingInvocationHandler.invoke(ProxyDispatchAdapter.java:93)\n\tat com.sun.proxy.$Proxy2.processTestClass(Unknown Source)\n\tat org.gradle.api.internal.tasks.testing.worker.TestWorker.processTestClass(TestWorker.java:118)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:175)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:157)\n\tat org.gradle.internal.remote.internal.hub.MessageHub$Handler.run(MessageHub.java:404)\n\tat org.gradle.internal.concurrent.ExecutorPolicy$CatchAndRecordFailures.onExecute(ExecutorPolicy.java:63)\n\tat org.gradle.internal.concurrent.ManagedExecutorImpl$1.run(ManagedExecutorImpl.java:46)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\n\tat org.gradle.internal.concurrent.ThreadFactoryImpl$ManagedThreadRunnable.run(ThreadFactoryImpl.java:55)\n\tat java.lang.Thread.run(Thread.java:748)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.write("scenario Fail");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
  "keyword": "And "
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
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.ChangePasswordStepDefinition.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap My Account button on Home page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.ChangePasswordStepDefinition.userTapMyAccountButtonOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Go to Top Up page by tapping Balance button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@MyAccount"
    },
    {
      "name": "@VerifyBalanceButtonFunction"
    }
  ]
});
formatter.step({
  "name": "User is on My Account page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.ChangePasswordStepDefinition.userIsOnMyAccountPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Balance button on My Account page",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.MyAccountStepDefinition.userTapBalanceButtonOnMyAccountPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on Top Up page",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.MyAccountStepDefinition.userIsOnTopUpPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
  "keyword": "And "
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
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.ChangePasswordStepDefinition.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap My Account button on Home page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.ChangePasswordStepDefinition.userTapMyAccountButtonOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Go to Home page by tapping Back button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@MyAccount"
    },
    {
      "name": "@VerifyBackButtonFunction"
    }
  ]
});
formatter.step({
  "name": "User is on My Account page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.ChangePasswordStepDefinition.userIsOnMyAccountPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Back button on My Account page",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.MyAccountStepDefinition.userTapBackButtonOnMyAccountPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.ChangePasswordStepDefinition.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
  "keyword": "And "
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
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.ChangePasswordStepDefinition.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap My Account button on Home page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.ChangePasswordStepDefinition.userTapMyAccountButtonOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Go to Login page by tapping Logout button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@MyAccount"
    },
    {
      "name": "@VerifyLogoutYesButtonFunction"
    }
  ]
});
formatter.step({
  "name": "User is on My Account page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.ChangePasswordStepDefinition.userIsOnMyAccountPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Logout button on My Account page",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.MyAccountStepDefinition.userTapLogoutButtonOnMyAccountPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap yes on pop up message",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.MyAccountStepDefinition.userTapYesOnPopUpMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
  "keyword": "And "
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
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.ChangePasswordStepDefinition.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap My Account button on Home page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.ChangePasswordStepDefinition.userTapMyAccountButtonOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Cancel logout from My Account page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@MyAccount"
    },
    {
      "name": "@VerifyLogoutNoButtonFunction"
    }
  ]
});
formatter.step({
  "name": "User is on My Account page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.ChangePasswordStepDefinition.userIsOnMyAccountPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Logout button on My Account page",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.MyAccountStepDefinition.userTapLogoutButtonOnMyAccountPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap no on pop up message",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.MyAccountStepDefinition.userTapNoOnPopUpMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on My Account page",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.ChangePasswordStepDefinition.userIsOnMyAccountPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
  "keyword": "And "
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
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.ChangePasswordStepDefinition.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap My Account button on Home page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.ChangePasswordStepDefinition.userTapMyAccountButtonOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check if Phone Number shown is the same with user Phone Number",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@MyAccount"
    },
    {
      "name": "@VerifyUserPhoneNumber"
    }
  ]
});
formatter.step({
  "name": "User is on My Account page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.ChangePasswordStepDefinition.userIsOnMyAccountPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see Phone Number on My Account page",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.MyAccountStepDefinition.userSeePhoneNumberOnMyAccountPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validate Phone Number with registered Phone Number \"081394577665\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.MyAccountStepDefinition.userValidatePhoneNumberWithRegisteredPhoneNumber(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
  "keyword": "And "
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
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.ChangePasswordStepDefinition.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap My Account button on Home page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.ChangePasswordStepDefinition.userTapMyAccountButtonOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check if Name shown is the same with user Name",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@MyAccount"
    },
    {
      "name": "@VerifyUserName"
    }
  ]
});
formatter.step({
  "name": "User is on My Account page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.ChangePasswordStepDefinition.userIsOnMyAccountPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see Name on My Account page",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.MyAccountStepDefinition.userSeeNameOnMyAccountPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validate Name with registered Name \"Dananjoyo Helyudanto\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.MyAccountStepDefinition.userValidateNameWithRegisteredName(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
  "keyword": "And "
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
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.ChangePasswordStepDefinition.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap My Account button on Home page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.ChangePasswordStepDefinition.userTapMyAccountButtonOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check if Email shown is the same with user Email",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@MyAccount"
    },
    {
      "name": "@VerifyEmail"
    }
  ]
});
formatter.step({
  "name": "User is on My Account page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.ChangePasswordStepDefinition.userIsOnMyAccountPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see Email on My Account page",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.MyAccountStepDefinition.userSeeEmailOnMyAccountPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validate Email with registered Email \"dananjoyoh@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.MyAccountStepDefinition.userValidateEmailWithRegisteredEmail(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
  "keyword": "And "
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
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.ChangePasswordStepDefinition.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap My Account button on Home page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.ChangePasswordStepDefinition.userTapMyAccountButtonOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check if Balance shown is the same with user Balance",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@MyAccount"
    },
    {
      "name": "@VerifyBalance"
    }
  ]
});
formatter.step({
  "name": "User is on My Account page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.ChangePasswordStepDefinition.userIsOnMyAccountPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see Balance on My Account page",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.MyAccountStepDefinition.userSeeBalanceOnMyAccountPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validate Balance with user current Balance \"Rp.133.000\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.MyAccountStepDefinition.userValidateBalanceWithUserCurrentBalance(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
  "keyword": "And "
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
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.ChangePasswordStepDefinition.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap My Account button on Home page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.ChangePasswordStepDefinition.userTapMyAccountButtonOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check setting button for incoming feature",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@MyAccount"
    },
    {
      "name": "@VerifySettingButtonFunctionality"
    }
  ]
});
formatter.step({
  "name": "User is on My Account page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.ChangePasswordStepDefinition.userIsOnMyAccountPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap setting button on My Account page",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.MyAccountStepDefinition.userTapSettingButtonOnMyAccountPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see message \"Coming soon!\" on My Account page",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.MyAccountStepDefinition.userSeeMessageOnMyAccountPage(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Coming soon!]\u003e but was:\u003c[Login success]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:117)\n\tat org.junit.Assert.assertEquals(Assert.java:146)\n\tat project.stepsdefinition.MyAccountStepDefinition.userSeeMessageOnMyAccountPage(MyAccountStepDefinition.java:89)\n\tat ✽.User see message \"Coming soon!\" on My Account page(file:///Users/samburr/IdeaProjects/DANA%20Business%20Project/src/test/resources/features/MyAccount.feature:72)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.write("scenario Fail");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
  "keyword": "And "
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
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.ChangePasswordStepDefinition.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap My Account button on Home page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.ChangePasswordStepDefinition.userTapMyAccountButtonOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check Change Profile button for incoming feature",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@MyAccount"
    },
    {
      "name": "@VerifyChangeProfileButtonFunctionality"
    }
  ]
});
formatter.step({
  "name": "User is on My Account page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.ChangePasswordStepDefinition.userIsOnMyAccountPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Change Profile button on My Account page",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.MyAccountStepDefinition.userTapChangeProfileButtonOnMyAccountPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see message \"Coming soon!\" on My Account page",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.MyAccountStepDefinition.userSeeMessageOnMyAccountPage(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Coming soon!]\u003e but was:\u003c[Login success]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:117)\n\tat org.junit.Assert.assertEquals(Assert.java:146)\n\tat project.stepsdefinition.MyAccountStepDefinition.userSeeMessageOnMyAccountPage(MyAccountStepDefinition.java:89)\n\tat ✽.User see message \"Coming soon!\" on My Account page(file:///Users/samburr/IdeaProjects/DANA%20Business%20Project/src/test/resources/features/MyAccount.feature:78)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.write("scenario Fail");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
  "keyword": "And "
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
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.ChangePasswordStepDefinition.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap My Account button on Home page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.ChangePasswordStepDefinition.userTapMyAccountButtonOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check Change PIN button for incoming feature",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@MyAccount"
    },
    {
      "name": "@VerifyChangePINButtonFunctionality"
    }
  ]
});
formatter.step({
  "name": "User is on My Account page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.ChangePasswordStepDefinition.userIsOnMyAccountPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Change PIN button on My Account page",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.MyAccountStepDefinition.userTapChangePINButtonOnMyAccountPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see message \"Coming soon!\" on My Account page",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.MyAccountStepDefinition.userSeeMessageOnMyAccountPage(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Coming soon!]\u003e but was:\u003c[Login success]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:117)\n\tat org.junit.Assert.assertEquals(Assert.java:146)\n\tat project.stepsdefinition.MyAccountStepDefinition.userSeeMessageOnMyAccountPage(MyAccountStepDefinition.java:89)\n\tat ✽.User see message \"Coming soon!\" on My Account page(file:///Users/samburr/IdeaProjects/DANA%20Business%20Project/src/test/resources/features/MyAccount.feature:84)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.write("scenario Fail");
formatter.after({
  "status": "passed"
});
});