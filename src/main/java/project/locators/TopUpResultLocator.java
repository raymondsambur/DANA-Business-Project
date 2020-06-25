package project.locators;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface TopUpResultLocator {

    // Text View
    By TEXT_RESULT = MobileBy.id("tv_result_status");
    By TEXT_RESULT_MESSAGE = MobileBy.id("tv_result_msg");
    By TEXT_INFO_MESSAGE = MobileBy.id("tv_result_info");

    // Image View
    By IMAGE_RESULT = MobileBy.id("iv_result");

    // Button
    By BUTTON_BACK = MobileBy.id("btn_result");

    //Error Message
    By ERROR_MESSAGE = MobileBy.xpath("/hierarchy/android.widget.Toast");

}
