package project.locators;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface RegisterLocator {

    // Text View
    By TEXT_REGISTER_TITLE = MobileBy.xpath("//android.widget.TextView[@text = 'Register']");
    By TEXT_CODE_AREA = MobileBy.id("textinput_prefix_text");
//    By TEXT_ERROR_NAME = MobileBy.id("tvRegisterErrorName");
//    By TEXT_ERROR_PHONE = MobileBy.id("tvRegisterErrorPhoneNumber");
//    By TEXT_ERROR_EMAIL = MobileBy.id("tvRegisterErrorEmail");
//    By TEXT_ERROR_PASSWORD = MobileBy.id("tvRegisterErrorPassword");
//    By TEXT_ERROR_CONFIRMATION_PASSWORD = MobileBy.id("tvRegisterErrorRePassword");
    By TEXT_ERROR_MESSAGE = MobileBy.id("tvRegisterErrorGeneral");
    By POP_UP_MESSAGE = MobileBy.id("snackbar_text");

    // Edit Text
    By INPUT_PHONE_NUMBER = MobileBy.id("et_phone_register");
    By INPUT_EMAIL = MobileBy.id("et_email_register");
    By INPUT_NAME = MobileBy.id("et_name_register");
    By INPUT_PASSWORD = MobileBy.id("et_password_register");
    By INPUT_RE_PASSWORD = MobileBy.id("et_password_confirm_register");

    // Button
    By BUTTON_REGISTER = MobileBy.id("bt_register");
    By BUTTON_BACK = MobileBy.id("img_back_register");
//    By BUTTON_LOGIN = MobileBy.id("btnRegisterLogin");
    By BUTTON_OK_ERROR = MobileBy.id("snackbar_action");
    By ICON_SHOW_PASSWORD = MobileBy.xpath("//android.widget.ImageButton[@content-desc='Show password']");

}
