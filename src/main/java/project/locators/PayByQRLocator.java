package project.locators;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface PayByQRLocator {

    // Button
    By BUTTON_ACTIVATE_FLASH = MobileBy.id("iv_torch");
    By BUTTON_BACK = MobileBy.id("iv_back_arrow");

    // Text View
    By TEXT_SCAN_INFO = MobileBy.id("tv_scan_info");

    // Icon
    By ICON_GALLERY = MobileBy.id("iv_gallery");

}
