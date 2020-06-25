package project.pages;

import project.PageFunctions;
import project.locators.PayByQRLocator;
import static project.androidDriver.AndroidDriverInstance.androidDriver;

public class PayByQRPage implements PayByQRLocator {
    public boolean isOnPayByQRPage() { return PageFunctions.waitABit(TEXT_SCAN_INFO).isDisplayed(); }
}
