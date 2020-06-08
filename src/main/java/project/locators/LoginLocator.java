package project.locators;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface LoginLocator {

    // Text View
    By TEXT_TITLE = MobileBy.id("tvLoginTitle");
    By TEXT_PHONE_CODE = MobileBy.id("tvLoginPhoneCode");
    By TEXT_AREA_CODE = MobileBy.id("tvLoginCodeArea");
    By TEXT_ERROR_MESSAGE = MobileBy.id("tvLoginErrorMessage");

    // Edit Text
    By INPUT_PHONE_NUMBER = MobileBy.id("etLoginHandphone");
    By INPUT_PASSWORD = MobileBy.id("etLoginPassword");

    // Button
    By BUTTON_LOGIN = MobileBy.id("btnLogin");
    By BUTTON_REGISTER = MobileBy.id("btnToRegister");
    By BUTTON_FORGOT_PASSWORD = MobileBy.id("btnLoginForgotPassword");

    // Image View
    By IMAGE_LOGIN = MobileBy.id("ivLoginImage");

    // Icon
    By ICON_PHONE = MobileBy.id("icLoginPhone");
    By ICON_LOCK = MobileBy.id("icLoginLock");
    By ICON_SHOW_PASSWORD = MobileBy.id("icLoginShowPassword");

}
