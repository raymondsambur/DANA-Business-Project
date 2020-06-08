package project.locators;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface DetailTransactionLocator {

    // Text View
    By TEXT_DETAIL_TRANSACTION_TITLE = MobileBy.id("tvDetailTransTitle");
    By TEXT_PAYMENT_INFORMATION_TITLE = MobileBy.id("tvDetailTransPayInfo");
    By TEXT_TRANSACTION_STATUS = MobileBy.id("tvDetailTransStatus");
    By TEXT_TRANSACTION_DATE = MobileBy.id("tvDetailTransDate");
    By TEXT_MERCHANT_NAME = MobileBy.id("tvDetailTransMerch");
    By TEXT_PAYMENT_METHOD = MobileBy.id("tvDetailTransPayMethod");
    By TEXT_TOTAL_PAYMENT = MobileBy.id("tvDetailTransTotal");
    By TEXT_TRANSACTION_ID = MobileBy.id("tvDetailTransID");
    By TEXT_VALID_UNTIL = MobileBy.id("tvDetailTransTimer");

    // Button
    By BUTTON_CONFIRM_PAYMENT = MobileBy.id("btnDetailTransConfirm");

}
