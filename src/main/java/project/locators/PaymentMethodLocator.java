package project.locators;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface PaymentMethodLocator {

    // Text View
    By TEXT_PAYMENT_MERCHANT_TITLE = MobileBy.id("tvPaymentMerchantTitle");
    By TEXT_PAYMENT_MERCHANT_DESCRIPTION = MobileBy.id("tvPaymentMerchantDesc");
    By TEXT_TRANSACTION_ID = MobileBy.id("tvPaymentMerchantID");
    By TEXT_MERCHANT_NAME = MobileBy.id("tvPaymentMerchantName");
    By TEXT_TOTAL_PAYMENT = MobileBy.id("tvPaymentMerchantTotal");

    // Button
    By BUTTON_MAKE_PURCHASE = MobileBy.id("btnPaymentMerchantPurchase");
    By BUTTON_BACK = MobileBy.id("btnPaymentMerchantBack");

}
