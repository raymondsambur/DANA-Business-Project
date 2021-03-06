package project;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import static project.androidDriver.AndroidDriverInstance.androidDriver;

public class PageFunctions {

    public static WebElement waitABit(By element) {
        WebDriverWait wait = new WebDriverWait(androidDriver, 10);
        return wait.until(ExpectedConditions.presenceOfElementLocated(element));
    }

}
