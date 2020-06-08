package project.locators;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface TopUpLocator {

    // Text View
    By TEXT_TOP_UP_TITLE = MobileBy.id("tvTopUpTitle");
    By TEXT_ERROR_MESSAGE = MobileBy.id("tvErrorMessage");

    // Edit Text
    By INPUT_AMOUNT = MobileBy.id("etTopUpAmount");

    // Image View
    By IMAGE_TOP_UP_LOGO = MobileBy.id("ivTopUpLogoTopUp");

    // Icon
    By ICON_NOMINAL = MobileBy.id("icTopUpNominal");

    // Button
    By BUTTON_PAY = MobileBy.id("btnTopUpPay");
    By BUTTON_BACK = MobileBy.id("btnTOpUpBack");

}
