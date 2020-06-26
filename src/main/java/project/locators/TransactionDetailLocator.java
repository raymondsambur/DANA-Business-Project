package project.locators;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface TransactionDetailLocator {

    By BUTTON_CONFIRM_PAYMENT = MobileBy.id("btn_make_purchases");
    By BUTTON_PAY = MobileBy.id("btn_pay");

}
