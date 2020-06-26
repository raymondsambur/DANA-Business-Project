package project.pages;

import org.openqa.selenium.By;
import project.PageFunctions;
import project.locators.PayByQRLocator;

import static project.PageFunctions.waitABit;
import static project.androidDriver.AndroidDriverInstance.androidDriver;

public class PayByQRPage implements PayByQRLocator {
    public boolean isOnPayByQRPage() { return waitABit(TEXT_SCAN_INFO).isDisplayed(); }

    public void tapFolderButton(String folder){
        androidDriver.findElement(By.xpath("//android.widget.TextView[@text='"+folder+"']")).click();
    }
    public void tapSuccessImage() { waitABit(IMAGE_SUCCESS).click(); }
    public void tapRefundImage() { waitABit(IMAGE_REFUND).click(); }
    public void tapFailedImage() { waitABit(IMAGE_FAILED).click(); }
    public void tapGalleryButton() { waitABit(ICON_GALLERY).click(); }
}
