package project.stepsdefinition;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import org.junit.Assert;
import project.pages.PayByQRPage;
import project.pages.PaymentConfirmationPage;
import project.pages.TransactionDetailPage;
import project.pages.TransactionResultPage;

public class TransactionStepDefinition {
    PayByQRPage payByQRPage = new PayByQRPage();
    PaymentConfirmationPage paymentConfirmationPage = new PaymentConfirmationPage();
    TransactionDetailPage transactionDetailPage = new TransactionDetailPage();
    TransactionResultPage transactionResultPage = new TransactionResultPage();

    @Given("User tap Gallery button on QR Scan page")
    public void userTapGalleryButtonOnQRScanPage() {
        payByQRPage.tapGalleryButton();
    }

    @When("User tap {string} button on QR Scan page")
    public void userTapButtonOnQRScanPage(String folder) {
        payByQRPage.tapFolderButton(folder);
    }

    @And("User tap {string} image on QR Scan page")
    public void userTapImageOnQRScanPage(String status) {
        switch (status){
            case "Success" :
                payByQRPage.tapSuccessImage();
                break;
            case "Refund" :
                payByQRPage.tapRefundImage();
                break;
            case "Failed" :
                payByQRPage.tapFailedImage();
                break;
        }
    }

    @And("User is on Payment Confirmation page")
    public void userIsOnPaymentConfirmationPage() {
        Assert.assertTrue(paymentConfirmationPage.isPaymentConfirmationPage());
    }

    @And("User tap Make Purchases button on Payment Confirmation page")
    public void userTapMakePurchasesButtonOnPaymentConfirmationPage() {
        paymentConfirmationPage.tapMakePurchaseButton();
    }

    @And("User is on Transaction Detail page")
    public void userIsOnTransactionDetailPage() {
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Assert.assertTrue(transactionDetailPage.isOnTransactionDetailPage());
    }

    @And("User tap Confirm Payment button on Transaction Detail page")
    public void userTapConfirmPaymentButtonOnTransactionDetailPage() {
        transactionDetailPage.tapConfirmPaymentButton();
    }

    @And("User tap Pay in pop up on Transaction Detail page")
    public void userTapPayInPopUpOnTransactionDetailPage() {
        transactionDetailPage.tapPayButton();
    }

    @And("User is on Transaction Result page")
    public void userIsOnTransactionResultPage() {
        Assert.assertTrue(transactionResultPage.isOnTransactionResultPage());
    }

    @And("User see transaction status {string} on Transaction Result Page")
    public void userSeeTransactionStatusOnTransactionResultPage(String status) {
        Assert.assertEquals(status, transactionResultPage.transactionStatus());
    }

    @And("User tap Back to Home button on Transaction Result page")
    public void userTapBackToHomeButtonOnTransactionResultPage() {
        transactionResultPage.tapBackToHomeButton();
    }
}
