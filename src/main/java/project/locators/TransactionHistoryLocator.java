package project.locators;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface TransactionHistoryLocator {

    // Text View
    By TEXT_TRANSACTION_HISTORY_TITLE = MobileBy.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/android.view.ViewGroup/android.widget.TextView");
    By TEXT_PAYMENT_STATUS = MobileBy.id("tvTransactionhistoryPaymentStatus");
    By TEXT_NOMINAL = MobileBy.id("tvTransactionhistoryNominal");
    By TEXT_DATE = MobileBy.id("tvTransactionhistoryDate");
    By TEXT_FILTER = MobileBy.id("tvTransactionhistoryFilter");
    By TEXT_STATUS = MobileBy.id("tvTransactionhistoryStatus");
    By TEXT_CHOOSE_DATE = MobileBy.id("tvTransactionhistoryChooseDate");
    By TEXT_START_DATE = MobileBy.id("tvTransactionhistoryStartDate");
    By TEXT_END_DATE = MobileBy.id("tvTransactionhistoryEndDate");
    By TEXT_SORTING = MobileBy.id("tvTransactionhistorySorting");

    // Button
    By BUTTON_IN_PROGRESS = MobileBy.id("btnTransactionhistoryInprogress");
    By BUTTON_COMPLETED = MobileBy.id("btnTranscationhistoryCompleted");
    By BUTTON_BACK = MobileBy.id("btnTransactionhistoryBack");
    By BUTTON_FILTER = MobileBy.id("btnTransactionhistoryFilter");
    By BUTTON_SORTING = MobileBy.id("btnTransactionhistorySorting");
    By BUTTON_CLOSE = MobileBy.id("btnTransactionhistoryCloseFilter");
    By BUTTON_SUCCESS = MobileBy.id("btnTransactionhistorySuccess");
    By BUTTON_FAILED = MobileBy.id("btnTransactionhistoryFailed");
    By BUTTON_REFUND = MobileBy.id("btnTransactionhistoryRefund");
    By BUTTON_ENABLE_DATE = MobileBy.id("btnTransactionhistoryEnableDate");
    By BUTTON_NEWEST = MobileBy.id("btnTransactionhistoryNewest");
    By BUTTON_OLDEST = MobileBy.id("btnTransactionhistoryOldest");
    By BUTTON_SUBMIT = MobileBy.id("btnTransactionhistorySubmit");

    // Spinner
    By SPINNER_START_DATE = MobileBy.id("spTransactionhistoryStartDate");
    By SPINNER_END_DATE = MobileBy.id("spTransactionhistoryEndDate");

}
