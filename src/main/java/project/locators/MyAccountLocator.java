package project.locators;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface MyAccountLocator {

    // Text View
    By TEXT_NAME = MobileBy.id("tv_name");
    By TEXT_PHONE_NUMBER = MobileBy.id("tv_phone");
    By TEXT_EMAIL = MobileBy.id("tv_email");
    By TEXT_BALANCE = MobileBy.id("tv_value");

    // Image View
    By IMAGE_USER = MobileBy.id("iv_profile");

    // Icon
    By ICON_USER = MobileBy.id("iv_profile");
    By ICON_BALANCE = MobileBy.xpath("(//android.widget.ImageView[@content-desc='Icon Prefix'])[1]");
    By ICON_PROFILE = MobileBy.xpath("(//android.widget.ImageView[@content-desc='Icon Prefix'])[2]");
    By ICON_LOCK = MobileBy.xpath("(//android.widget.ImageView[@content-desc='Icon Prefix'])[3]");
    By ICON_PIN = MobileBy.xpath("(//android.widget.ImageView[@content-desc='Icon Prefix'])[4]");
    By ICON_LOGOUT = MobileBy.xpath("(//android.widget.ImageView[@content-desc='Icon Prefix'])[5]");

    // Button
    By BUTTON_CHANGE_PROFILE = MobileBy.xpath("(//android.widget.ImageView[@content-desc='Icon Postfix'])[2]");
    By BUTTON_CHANGE_PIN_SECURITY = MobileBy.xpath("(//android.widget.ImageView[@content-desc='Icon Postfix'])[4]");
    By BUTTON_CHANGE_PASSWORD = MobileBy.xpath("(//android.widget.ImageView[@content-desc='Icon Postfix'])[3]");
    By BUTTON_LOGOUT = MobileBy.xpath("(//android.widget.ImageView[@content-desc='Icon Postfix'])[5]");
    By BUTTON_BACK = MobileBy.id("iv_back_arrow");
    By BUTTON_SETTING = MobileBy.id("iv_setting");
    By BUTTON_BALANCE = MobileBy.xpath("(//android.widget.ImageView[@content-desc='Icon Postfix'])[1]");
    By BUTTTON_LOGOUT_YES = MobileBy.xpath("//android.widget.Button[2]");
    By BUTTON_LOGOUT_NO = MobileBy.xpath("//android.widget.Button[1]");

    By TOAST_ERROR_MESSAGE = MobileBy.xpath("//android.widget.Toast[1]");


}
