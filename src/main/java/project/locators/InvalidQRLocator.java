package project.locators;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface InvalidQRLocator {

    // Text View
    By TEXT_INVALID_QR_TITLE = MobileBy.id("tvInvalidQRTitle");
    By TEXT_INVALID_QR_DESCRIPTION = MobileBy.id("tvInvalidQRDesc");

    // Image View
    By IMAGE_QR = MobileBy.id("ivInvalidQRImage");

    // Button
    By BUTTON_RESCAN = MobileBy.id("btnInvalidQRRescan");
    By BUTTON_BACK = MobileBy.id("btnInvalidQRBack");

}
