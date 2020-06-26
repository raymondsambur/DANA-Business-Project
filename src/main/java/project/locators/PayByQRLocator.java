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

    // Folder (depends on device locator)
    By FOLDER_BUTTON = MobileBy.xpath("//android.widget.TextView[@text='Download']");
    By IMAGE_SUCCESS = MobileBy.xpath("//android.view.ViewGroup[@content-desc='Photo taken on Jun 22, 2020 1:09:44 PM.']");
    By IMAGE_FAILED = MobileBy.xpath("//android.view.ViewGroup[@content-desc='Photo taken on Jun 22, 2020 1:09:23 PM.']");
    By IMAGE_REFUND = MobileBy.xpath("//android.view.ViewGroup[@content-desc='Photo taken on Jun 22, 2020 1:09:33 PM.']");

}
