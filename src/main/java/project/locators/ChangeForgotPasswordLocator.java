package project.locators;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface ChangeForgotPasswordLocator {

    // Text View
    By TEXT_CHANGE_PASSWORD_TITLE = MobileBy.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.TextView\n");
    By TEXT_ERROR_NEPASS = MobileBy.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.TextView\n");
    By TEXT_ERROR_REPASS = MobileBy.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.TextView\n");

    // Edit Text
    By INPUT_NEW_PASSWORD = MobileBy.id("et_new_password");
    By INPUT_RE_PASSWORD = MobileBy.id("et_new_password_confirm");

    // Button
    By BUTTON_SAVE_CHANGES = MobileBy.id("bt_reset_password");
    By BUTTON_BACK = MobileBy.id("img_back_reset_password");

    // Icon
    By ICON_LOCK_LIGHT = MobileBy.id("icChangePasswordLockLight");
    By ICON_LOCK_DARK = MobileBy.id("icChangePasswordLockDark");

}
