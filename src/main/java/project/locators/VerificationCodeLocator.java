package project.locators;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface VerificationCodeLocator {

    // Text View
    By TEXT_VERIFICATION_TITLE = MobileBy.id("tvVerificationCodeTitle");
    By TEXT_PHONE_NUMBER = MobileBy.id("tvVerificationCodePhoneNumber");
    By TEXT_TIMER = MobileBy.id("tvVerificationCodeTimer");
    By TEXT_ERROR_MESSAGE = MobileBy.id("tvErrorMessage");

    // Edit Text
    By INPUT_VERIFICATION_CODE = MobileBy.id("etVerificationCodeInputCode");

    // Button
    By BUTTON_VALIDATE = MobileBy.id("btnVerificationCodeValidate");
    By BUTTON_BACK = MobileBy.id("btnVerificationCodeBack");

}
