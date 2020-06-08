package project.locators;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface RegisterLocator {

    // Text View
    By TEXT_REGISTER_TITLE = MobileBy.id("tvRegisterTitle");
    By TEXT_CODE_AREA = MobileBy.id("tvRegisterCodeArea");
    By TEXT_ERROR_NAME = MobileBy.id("tvRegisterErrorName");
    By TEXT_ERROR_PHONE = MobileBy.id("tvRegisterErrorPhoneNumber");
    By TEXT_ERROR_EMAIL = MobileBy.id("tvRegisterErrorEmail");
    By TEXT_ERROR_PASSWORD = MobileBy.id("tvRegisterErrorPassword");
    By TEXT_ERROR_CONFIRMATION_PASSWORD = MobileBy.id("tvRegisterErrorRePassword");
    By TEXT_ERROR_GENERAL = MobileBy.id("tvRegisterErrorGeneral");

    // Edit Text
    By INPUT_PHONE_NUMBER = MobileBy.id("etRegisterPhoneNumber");
    By INPUT_EMAIL = MobileBy.id("etRegisterEmail");
    By INPUT_NAME = MobileBy.id("etRegisterName");
    By INPUT_PASSWORD = MobileBy.id("etRegisterPassword");
    By INPUT_RE_PASSWORD = MobileBy.id("etRegisterRePassword");

    // Button
    By BUTTON_REGISTER = MobileBy.id("btnRegister");
    By BUTTON_BACK = MobileBy.id("btnRegisterBack");
    By BUTTON_LOGIN = MobileBy.id("btnRegisterLogin");

}
