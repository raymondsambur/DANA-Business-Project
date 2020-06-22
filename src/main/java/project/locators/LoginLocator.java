package project.locators;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface LoginLocator {

    // Text View
    By TEXT_TITLE = MobileBy.id("tvLoginTitle");
    By TEXT_PHONE_CODE = MobileBy.id("tvLoginPhoneCode");
    By TEXT_AREA_CODE = MobileBy.id("tvLoginCodeArea");
    By TEXT_ERROR_MESSAGE = MobileBy.id("textinput_error");

    // Edit Text
    By INPUT_PHONE_NUMBER = MobileBy.id("et_phone_login");
    By INPUT_PASSWORD = MobileBy.id("et_password_login");

    // Button
    By BUTTON_LOGIN = MobileBy.id("bt_login");
    By BUTTON_REGISTER = MobileBy.id("tv_sign_up_login");
    By BUTTON_FORGOT_PASSWORD = MobileBy.id("tv_forgot_password_login");

    // Image View
    By IMAGE_LOGIN = MobileBy.xpath("//android.widget.ImageView");

    // Icon
    By ICON_PHONE = MobileBy.id("icLoginPhone");
    By ICON_LOCK = MobileBy.id("icLoginLock");
    By ICON_SHOW_PASSWORD = MobileBy.xpath("//android.widget.ImageButton[@content-desc='Show password']");

}
