package project.locators;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface HomeLocator {

    // Text View
    By TEXT_BALANCE = MobileBy.id("tvHomeBalance");

    // Image View
    By IMAGE_DANA = MobileBy.id("ivHomeLogo");

    // Button
    By BUTTON_TOP_UP = MobileBy.id("btnHomeTopUp");
    By BUTTON_HISTORY = MobileBy.id("btnHomeHistory");
    By BUTTON_TRANSFER = MobileBy.id("btnHomeTransfer");
    By BUTTON_MY_ACCOUNT = MobileBy.id("btnHomeMyAccount");
    By BUTTON_SCAN_TO_PAY = MobileBy.id("btnHomeScan");

}
