package project.locators;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface PayByQRLocator {

    // Button
    By BUTTON_ACTIVATE_FLASH = MobileBy.id("btnQRflash");
    By BUTTON_BACK = MobileBy.id("btnQRback");

    // Text View
    By TEXT_PRESS = MobileBy.id("tvQRPress");

}
