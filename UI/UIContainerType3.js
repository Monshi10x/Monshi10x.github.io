const STYLE = {
      Button: "display: block; float: left; width: 45%; background-color: " + COLOUR.Blue + "; color:white;min-height: 35px; margin: 10px; border:4px solid " + COLOUR.Blue + ";cursor: pointer;",
      InputField: "float:left;width:200px;height:15px;margin: 4px;padding:4px;border:1px solid;box-shadow: rgb(199 199 199) 4px 6px 20px 0px;box-sizing:content-box;",
      InputInfield: "float:left;width:250px;min-height:40px;border:1px solid rgb(177, 177, 177);box-shadow: rgb(199 199 199) 4px 6px 20px 0px;position: relative;margin:5px;background-color:white;",
      DropDownField: "float:left;width:200px;height:15px;margin: 4px;padding:4px;border:1px solid rgb(177, 177, 177);;box-shadow: rgb(199 199 199) 4px 6px 20px 0px;box-sizing:content-box;",
      DropDownInfield: "float:left;width:250px;min-height:40px;border:1px solid rgb(177, 177, 177);;box-shadow: rgb(199 199 199) 4px 6px 20px 0px;position: relative;margin:5px;background-color:white;",
      Label: "color:black;float:left;width:200px;height:25px;margin: 0px;padding:4px;box-sizing:border-box;",
      Checkbox: "color:black;float:left;width:200px;height:15px;margin: 10px;padding:10px;border:1px solid rgb(177, 177, 177);box-sizing:content-box;",
      CheckboxInfield: "float: left; min-height: 42px; border: 1px solid rgb(177, 177, 177); box-shadow: rgb(199 199 199) 4px 6px 20px 0px;position: relative; margin: 5px; background-color: white; width: 97%;padding-top: 4px;box-sizing:border-box;",
      Depictions: "float:left;width:15px;height:30px;margin: 5px;padding:4px;border:1px solid #888;box-sizing:content-box;background-color:white;",
      BillboardMenus: "display:block;float:left;box-sizing:border-box;background-color:" + COLOUR.BillboardMenus + ";min-height:30px; margin: 10px 20px 30px;width: calc(100% - 40px);box-shadow: rgb(0 0 0 / 80%) 3px 4px 10px 0px;padding:10px;accent-color:" + COLOUR.Blue + ";",
      DropShadow: "box-shadow: rgb(98 98 98) 5px 5px 10px -3px;",
      HeaderFont: "font-family: 'Century Gothic', CenturyGothic, AppleGothic, sans-serif;font-weight:bold;font-size:14px;",
      HeadingStyle1: "height:30px;z-index:99;position: relative;margin:0px;background-color:" + COLOUR.DarkBlue + ";width:100%;box-sizing: border-box;padding:0px;font-size:10px;color:white;text-align:center;line-height:30px;box-shadow: rgb(61 61 61) 0px 6px 14px 2px;margin:20px 0px;border:1px solid " + COLOUR.DarkBlue + ";",
      Table: "float:left;width:100%;border-collapse: collapse;table-layout: auto;color:white;",
      TableHeader: "font-weight: bold; font-family: 'Century Gothic', CenturyGothic, AppleGothic, sans-serif;background-color:" + COLOUR.Blue + ";colour:white;table-layout: auto;",
      TableData: "box-sizing: border-box;outline: 1px solid #000;outline-offset:-1px;text-align:left;padding: 5px;color:black;background-color:white;table-layout: fixed;",
      Div: "float:left;box-sizing:border-box;border:1px solid #000;border-collapse: collapse;background-color:" + COLOUR.MidBlue + ";",
      Div2: "display: block; float: left; width: 88%; background-color: white; min-height: 10px; margin: 10px 20px 30px; box-shadow: rgba(0, 0, 0, 0.8) 3px 4px 10px 0px; padding: 10px; accent-color: blue;overflow-y:auto;max-height:800px;",
      Div3: "display: block; box-sizing:border-box;float: left; background-color: white; min-height: 10px; margin: 10px 20px 30px;width: calc(100% - 40px); box-shadow: rgba(0, 0, 0, 0.8) 3px 4px 10px 0px; padding: 0px; accent-color: blue;overflow-y:none;max-height:800px;"
};
class UIContainerType3 {
      #container;
      get container() {return this.#container;}

      #headingContainer;
      get headingContainer() {return this.#headingContainer;}

      #headingContainer_Height = 30;

      #headingText;
      get headingText() {return this.#headingText;}

      #popOutBtn;
      #popOutBtn_Width = 30;
      #popOutBtn_Height = 30;
      #popOutModal;
      #whenClosedReturnBorrowed = true;
      get whenClosedReturnBorrowed() {return this.#whenClosedReturnBorrowed;}
      set whenClosedReturnBorrowed(val) {
            this.#whenClosedReturnBorrowed = val;
            if(this.#popOutModal) this.#popOutModal.whenClosedReturnBorrowed = val;
      }

      #minimizeBtn;
      #minimizeBtn_Width = 30;
      #minimizeBtn_Height = 30;
      #isMinimized = false;

      #contentContainer;
      get contentContainer() {return this.#contentContainer;}

      constructor(overrideCssStyles, headingText, parentObjectToAppendTo) {
            this.#headingText = headingText;

            /**@Container */
            this.#container = document.createElement("div");
            this.#container.style = STYLE.Div3;
            this.#container.style.cssText += "display:flex;flex-direction:column;";
            this.#container.style.cssText += overrideCssStyles;
            if(parentObjectToAppendTo != null) {
                  parentObjectToAppendTo.appendChild(this.#container);
            }

            /**@HeadingContainer */
            this.#headingContainer = document.createElement("div");
            this.#headingContainer.style = "width:100%;height:" + this.#headingContainer_Height + "px;box-sizing:border-box;";
            this.#container.appendChild(this.#headingContainer);

            /**@HeadingText */
            if(headingText !== null) {
                  this.#headingText = document.createElement("h3");
                  this.#headingText.innerText = headingText;
                  this.#headingText.style = "float: left; height: 30px; margin: 0px 0px 0px 0px; background-color: " + COLOUR.DarkGrey + "; width: calc(100% - " + (this.#minimizeBtn_Width + this.#popOutBtn_Width) + "px); box-sizing: border-box; padding: 0px; font-size: 14px; color: white; text-align: center; line-height: 30px; border: 1px solid " + COLOUR.DarkGrey + ";";
                  this.#headingContainer.appendChild(this.#headingText);
            }

            /**@MinimizeBtn */
            this.#minimizeBtn = createButton("-", "display: block; float: right; width: " + this.#minimizeBtn_Width + "px;height:" + this.#minimizeBtn_Height + "px; border:none;padding:2px; color:white;min-height: 20px; margin: 0px 0px 0px 0px; box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px 0px;background-color:" + COLOUR.LightBlue + ";", () => {this.toggleMinimize();});
            this.#minimizeBtn.id = "minimizeBtn";
            this.#minimizeBtn.dataset.minimizedState = "maximized";
            this.#headingContainer.appendChild(this.#minimizeBtn);

            /**@PopOutBtn */
            this.#popOutBtn = createButton("\u274F", "display: block; float: right; width: " + this.#popOutBtn_Width + "px;height:" + this.#popOutBtn_Height + "px; border:none;padding:2px; color:white;min-height: 20px; margin: 0px; box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px 0px;background-color:" + COLOUR.DarkBlue + ";", () => {
                  setFieldDisabled(true, this.#popOutBtn);
                  this.onPopOut();
                  this.#popOutModal = new ModalPopOut("Expanded View", () => {
                        setFieldDisabled(false, this.#popOutBtn);
                        this.onPopOutLeave();
                        this.callbackOverridable();
                  }, this.#container);
                  this.#popOutModal.whenClosedReturnBorrowed = this.whenClosedReturnBorrowed;
            }, this.#headingContainer);

            /**@ContentContainer */
            this.#contentContainer = document.createElement("div");
            this.#contentContainer.style = "width:100%;max-height:calc(100% - 30px);overflow-y:scroll;display:block;position: relative;";
            this.#container.appendChild(this.#contentContainer);
      }

      toggleMinimize() {
            if(this.#contentContainer.style.display == "none") {
                  this.Maximize();
            } else {
                  this.Minimize();
            }
      }

      Minimize() {
            this.#isMinimized = true;
            this.#contentContainer.style.display = "none";
            this.#minimizeBtn.innerText = "▭";
            this.#minimizeBtn.dataset.minimizedState = "minimized";
      }

      Maximize() {
            this.#isMinimized = false;
            this.#contentContainer.style.display = "block";
            this.#minimizeBtn.innerText = "-";
            this.#minimizeBtn.dataset.minimizedState = "maximized";
      }

      onPopOut() {
            this.prePopOutState = this.#isMinimized;//true
            this.Maximize();
            this.#contentContainer.style.maxHeight = "100%";
            this.#container.style.maxHeight = "10000px";
      }

      onPopOutLeave() {
            //if was minimized before, restore to minimized
            if(this.prePopOutState == true) this.Minimize();
            else this.Maximize();
            this.#contentContainer.style.maxHeight = "400px";
            this.#container.style = STYLE.Div3;
      }

      /**@Overridable */
      callbackOverridable() {
            console.log("callbackOverridable");
      }

      #addedHeadingItems_combinedWidth = 0;
      addHeadingButtons(...itemContainers) {
            for(let i = 0; i < itemContainers.length; i++) {
                  this.#headingContainer.appendChild(itemContainers[i]);
                  this.#addedHeadingItems_combinedWidth += itemContainers[i].offsetWidth;
            }
            this.#headingText.style.width = "calc(100% - " + (this.#addedHeadingItems_combinedWidth + this.#minimizeBtn_Width + this.#popOutBtn_Width) + "px";
      }
}