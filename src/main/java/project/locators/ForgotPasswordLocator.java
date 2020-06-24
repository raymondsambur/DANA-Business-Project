package project.locators;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface ForgotPasswordLocator {

    // Text View
    By TEXT_FORGOT_PASSWORD_TITLE = MobileBy.id("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.TextView\n");
    By TEXT_ERROR_MESSAGE = MobileBy.id("textinput_error");
    By TEXT_POP_MESSAGE = MobileBy.id("snackbar_text");

    // Edit Text
    By INPUT_EMAIL = MobileBy.id("textinput_placeholder");

    // Button
    By BUTTON_SEND = MobileBy.id("bt_send_forgot");
    By BUTTON_BACK = MobileBy.id("img_back_forgot");

    // Icon
    By ICON_EMAIL = MobileBy.id("text_input_start_icon");

}
