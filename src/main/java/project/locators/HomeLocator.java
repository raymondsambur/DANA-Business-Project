package project.locators;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface HomeLocator {

    // Text View
    By TEXT_BALANCE = MobileBy.id("tv_amount");
    By TOAST_MESSAGE = MobileBy.xpath("/hierarchy/android.widget.Toast");

    // Image View
    By IMAGE_DANA = MobileBy.id("img_logo_dana");

    // Button
    By BUTTON_TOP_UP = MobileBy.id("img_icon_first");
    By BUTTON_HISTORY = MobileBy.id("img_icon_second");
    By BUTTON_TRANSFER = MobileBy.id("img_icon_third");
    By BUTTON_MY_ACCOUNT = MobileBy.id("img_icon_fourth");
    By BUTTON_SCAN_TO_PAY = MobileBy.id("img_icon_center");
    By BUTTON_NOTIFICATION = MobileBy.id("img_button_notification");
    By BUTTON_ALLOW_CAMERA = MobileBy.id("permission_allow_button");
    By BUTTON_ALLOW_FILES = MobileBy.id("permission_allow_button");

}
