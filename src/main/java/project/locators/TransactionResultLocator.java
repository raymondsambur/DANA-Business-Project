package project.locators;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface TransactionResultLocator {

    // Text View
    By TEXT_RESULT_TITLE = MobileBy.id("tvResultTitle");
    By TEXT_STATUS = MobileBy.id("tv_result_status");
    By TEXT_STATUS_DESCRIPTION = MobileBy.id("tvResultStatusDesc");

    // Image View
    By IMAGE_STATUS = MobileBy.id("iv_result");

    // Button
    By BUTTON_BACK_TO_HOME = MobileBy.id("btn_result");
    By BUTTON_RETRY = MobileBy.id("btnResultRetry");
    By BUTTON_BACK = MobileBy.id("btnResultBack");

}
