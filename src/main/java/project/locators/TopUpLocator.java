package project.locators;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface TopUpLocator {

    // Text View
    By TEXT_TOP_UP_TITLE = MobileBy.id("tv_title");
    By TEXT_ERROR_MESSAGE = MobileBy.id("textinput_error");
    By TEXT_BALANCE = MobileBy.id("tv_amount");

    // Edit Text
    By INPUT_AMOUNT = MobileBy.id("textinput_placeholder");

    // Icon
    By ICON_NOMINAL = MobileBy.id("text_input_start_icon");

    // Button
    By BUTTON_TOP_UP = MobileBy.id("bt_top_up");
    By BUTTON_BACK = MobileBy.xpath("android.widget.ImageButton[@content-desc='Navigate up']");

    //Payment Method
    By TEXT_PAYMENT_METHOD = MobileBy.id("tv_method_title");
    By BUTTON_CHANGE = MobileBy.id("tv_change_method");
    By BUTTON_CLOSE = MobileBy.id("img_close_top_up_confirm");
    By BUTTON_PAY = MobileBy.id("bt_pay_top_up");
    By TOP_UP_AMOUNT = MobileBy.id("tv_amount");
    By BUTTON_DEBIT_CARD = MobileBy.id("tv_method_opt_1");
    By BUTTON_BANK_TRANSFER = MobileBy.id("tv_method_opt_2");
    By BUTTON_ALFAMART = MobileBy.id("tv_method_opt_3");





}
