(function() {
    let _shadowRoot;
    let _id;
    let _password;

    let tmpl = document.createElement("template");
    tmpl.innerHTML = `
        <style>
        </style>
        <div id="ui5_content" name="ui5_content">
         <slot name="content"></slot>
        </div>
        <script id="oView" name="oView" type="sapui5/xmlview">
            <mvc:View
			    controllerName="myView.Template"
				xmlns:l="sap.ui.layout"
				xmlns:mvc="sap.ui.core.mvc"
				xmlns="sap.m">
				<l:VerticalLayout
					class="sapUiContentPadding"
					width="100%">
					<l:content>
		<TreeTable
                    id="TreeTableBasic"
                    rows="
      "categories": [
        {"name": "Women", "categories": [
          {"name":"Clothing", "categories": [
            {"name": "Dresses", "categories": [
              {"name": "Casual Red Dress", "amount": 16.99, "currency": "EUR", "size": "S"},
              {"name": "Short Black Dress", "amount": 47.99, "currency": "EUR", "size": "M"},
              {"name": "Long Blue Dinner Dress", "amount": 103.99, "currency": "USD", "size": "L"}
            ]},
            {"name": "Tops", "categories": [
              {"name": "Printed Shirt", "amount": 24.99, "currency": "USD", "size": "M"},
              {"name": "Tank Top", "amount": 14.99, "currency": "USD", "size": "S"}
            ]},
            {"name": "Pants", "categories": [
              {"name": "Red Pant", "amount": 32.99, "currency": "USD", "size": "M"},
              {"name": "Skinny Jeans", "amount": 44.99, "currency": "USD", "size": "S"},
              {"name": "Black Jeans", "amount": 99.99, "currency": "USD", "size": "XS"},
              {"name": "Relaxed Fit Jeans", "amount": 56.99, "currency": "USD", "size": "L"}
            ]},
            {"name": "Skirts", "categories": [
              {"name": "Striped Skirt", "amount": 24.99, "currency": "USD", "size": "M"},
              {"name": "Black Skirt", "amount": 44.99, "currency": "USD", "size": "S"}
            ]}
          ]},
          {"name":"Jewelry", "categories": [
              {"name": "Necklace", "amount": 16.99, "currency": "USD"},
              {"name": "Bracelet", "amount": 47.99, "currency": "USD"},
              {"name": "Gold Ring", "amount": 399.99, "currency": "USD"}
            ]},
          {"name":"Handbags", "categories": [
            {"name": "Little Black Bag", "amount": 16.99, "currency": "USD", "size": "S"},
            {"name": "Grey Shopper", "amount": 47.99, "currency": "USD", "size": "M"}
          ]},
          {"name":"Shoes", "categories": [
            {"name": "Pumps", "amount": 89.99, "currency": "USD"},
            {"name": "Sport Shoes", "amount": 47.99, "currency": "USD"},
            {"name": "Boots", "amount": 103.99, "currency": "USD"}
          ]}
        ]},
        {"name": "Men", "categories": [
          {"name":"Clothing", "categories": [
            {"name": "Shirts", "categories": [
              {"name": "Black T-shirt", "amount": 9.99, "currency": "USD", "size": "XL"},
              {"name": "Polo T-shirt", "amount": 47.99, "currency": "USD", "size": "M"},
              {"name": "White Shirt", "amount": 103.99, "currency": "USD", "size": "L"}
            ]},
            {"name": "Pants", "categories": [
              {"name": "Blue Jeans", "amount": 78.99, "currency": "USD", "size": "M"},
              {"name": "Stretch Pant", "amount": 54.99, "currency": "USD", "size": "S"}
            ]},
            {"name": "Shorts", "categories": [
              {"name": "Trouser Short", "amount": 62.99, "currency": "USD", "size": "M"},
              {"name": "Slim Short", "amount": 44.99, "currency": "USD", "size": "S"}
            ]}
          ]},
          {"name":"Accessories", "categories": [
            {"name": "Tie", "amount": 36.99, "currency": "USD"},
            {"name": "Wallet", "amount": 47.99, "currency": "USD"},
            {"name": "Sunglasses", "amount": 199.99, "currency": "USD"}
          ]},
          {"name":"Shoes", "categories": [
            {"name": "Fashion Sneaker", "amount": 89.99, "currency": "USD"},
            {"name": "Sport Shoe", "amount": 47.99, "currency": "USD"},
            {"name": "Boots", "amount": 103.99, "currency": "USD"}
          ]}
        ]},
          {"name": "Girls", "categories": [
            {"name":"Clothing", "categories": [
              {"name": "Shirts", "categories": [
                {"name": "Red T-shirt", "amount": 16.99, "currency": "USD", "size": "S"},
                {"name": "Tunic Top", "amount": 47.99, "currency": "USD", "size": "M"},
                {"name": "Fuzzy Sweater", "amount": 103.99, "currency": "USD", "size": "L"}
              ]},
              {"name": "Pants", "categories": [
                {"name": "Blue Jeans", "amount": 24.99, "currency": "USD", "size": "M"},
                {"name": "Red Pant", "amount": 54.99, "currency": "USD", "size": "S"}
              ]},
              {"name": "Shorts", "categories": [
                {"name": "Jeans Short", "amount": 32.99, "currency": "USD", "size": "M"},
                {"name": "Sport Short", "amount": 14.99, "currency": "USD", "size": "S"}
              ]}
            ]},
            {"name":"Accessories", "categories": [
              {"name": "Necklace", "amount": 26.99, "currency": "USD"},
              {"name": "Gloves", "amount": 7.99, "currency": "USD"},
              {"name": "Beanie", "amount": 12.99, "currency": "USD"}
            ]},
            {"name":"Shoes", "categories": [
              {"name": "Sport Shoes", "amount": 39.99, "currency": "USD"},
              {"name": "Boots", "amount": 87.99, "currency": "USD"},
              {"name": "Sandals", "amount": 63.99, "currency": "USD"}
            ]}
          ]},
            {"name": "Boys", "categories": [
              {"name":"Clothing", "categories": [
                {"name": "Shirts", "categories": [
                  {"name": "Black T-shirt with Print", "amount": 16.99, "currency": "USD", "size": "S"},
                  {"name": "Blue Shirt", "amount": 47.99, "currency": "USD", "size": "M"},
                  {"name": "Yellow Sweater", "amount": 63.99, "currency": "USD", "size": "L"}
                ]},
                {"name": "Pants", "categories": [
                  {"name": "Blue Jeans", "amount": 44.99, "currency": "USD", "size": "M"},
                  {"name": "Brown Pant", "amount": 89.99, "currency": "USD", "size": "S"}
                ]},
                {"name": "Shorts", "categories": [
                  {"name": "Sport Short", "amount": 32.99, "currency": "USD", "size": "M"},
                  {"name": "Jeans Short", "amount": 99.99, "currency": "USD", "size": "XS"},
                  {"name": "Black Short", "amount": 56.99, "currency": "USD", "size": "L"}
                ]}
              ]},
              {"name":"Accessories", "categories": [
                {"name": "Sunglasses", "amount": 36.99, "currency": "USD"},
                {"name": "Beanie", "amount": 17.99, "currency": "USD"},
                {"name": "Scarf", "amount": 15.99, "currency": "USD"}
              ]},
              {"name":"Shoes", "categories": [
                {"name": "Sneaker", "amount": 89.99, "currency": "USD"},
                {"name": "Sport Shoe", "amount": 47.99, "currency": "USD"},
                {"name": "Boots", "amount": 103.99, "currency": "USD"}
              ]}
            ]}
        ]}
    }
		    
		    , parameters: {arrayNames:['categories']}}"
                    selectionMode="MultiToggle"
                    enableSelectAll="false"
                    ariaLabelledBy="title">
                <extension>
                    <m:OverflowToolbar style="Clear">
                        <m:Title id="title" text="Clothing"/>
                        <m:ToolbarSpacer/>
                        <m:Button text="Collapse all" press="onCollapseAll"/>
                        <m:Button text="Collapse selection" press="onCollapseSelection"/>
                        <m:Button text="Expand first level" press="onExpandFirstLevel"/>
                        <m:Button text="Expand selection" press="onExpandSelection"/>
                    </m:OverflowToolbar>
                </extension>
                <columns>
                    <Column width="13rem">
                        <m:Label text="Categories"/>
                        <template>
                            <m:Text text="{name}" wrapping="false" />
                        </template>
                    </Column>
                    <Column width="9rem">
                        <m:Label text="Price"/>
                        <template>
                            <u:Currency value="{amount}" currency="{currency}"/>
                        </template>
                    </Column>
                    <Column width="11rem">
                        <m:Label text="Size"/>
                        <template>
                            <m:Select
                                    items="{[
    					{"key": "XS", "value": "Extra Small"},
    					{"key": "S", "value": "Small"},
    					{"key": "M", "value": "Medium"},
    					{"key": "L", "value": "Large"}
  					], templateShareable: true}"
                                    selectedKey="{M}"
      
                                    forceSelection="false">
                                <core:Item key="{key}" text="{value}"/>
                            </m:Select>
                        </template>
                    </Column>
                </columns>
            </TreeTable>
					
						<Input
							id="passwordInput"
							type="Password"
							placeholder="Enter password ..." liveChange="onButtonPress"/>
					</l:content>
				</l:VerticalLayout>
			</mvc:View>
        </script>        
    `;

    class InputPassword extends HTMLElement {

        constructor() {
            super();

            _shadowRoot = this.attachShadow({
                mode: "open"
            });
            _shadowRoot.appendChild(tmpl.content.cloneNode(true));

            _id = createGuid();

            _shadowRoot.querySelector("#oView").id = _id + "_oView";

            this._export_settings = {};
            this._export_settings.password = "";

            this.addEventListener("click", event => {
                console.log('click');
            });
        }

        connectedCallback() {
            try {
                if (window.commonApp) {
                    let outlineContainer = commonApp.getShell().findElements(true, ele => ele.hasStyleClass && ele.hasStyleClass("sapAppBuildingOutline"))[0]; // sId: "__container0"

                    if (outlineContainer && outlineContainer.getReactProps) {
                        let parseReactState = state => {
                            let components = {};

                            let globalState = state.globalState;
                            let instances = globalState.instances;
                            let app = instances.app["[{\"app\":\"MAIN_APPLICATION\"}]"];
                            let names = app.names;

                            for (let key in names) {
                                let name = names[key];

                                let obj = JSON.parse(key).pop();
                                let type = Object.keys(obj)[0];
                                let id = obj[type];

                                components[id] = {
                                    type: type,
                                    name: name
                                };
                            }

                            for (let componentId in components) {
                                let component = components[componentId];
                            }

                            let metadata = JSON.stringify({
                                components: components,
                                vars: app.globalVars
                            });

                            if (metadata != this.metadata) {
                                this.metadata = metadata;

                                this.dispatchEvent(new CustomEvent("propertiesChanged", {
                                    detail: {
                                        properties: {
                                            metadata: metadata
                                        }
                                    }
                                }));
                            }
                        };

                        let subscribeReactStore = store => {
                            this._subscription = store.subscribe({
                                effect: state => {
                                    parseReactState(state);
                                    return {
                                        result: 1
                                    };
                                }
                            });
                        };

                        let props = outlineContainer.getReactProps();
                        if (props) {
                            subscribeReactStore(props.store);
                        } else {
                            let oldRenderReactComponent = outlineContainer.renderReactComponent;
                            outlineContainer.renderReactComponent = e => {
                                let props = outlineContainer.getReactProps();
                                subscribeReactStore(props.store);

                                oldRenderReactComponent.call(outlineContainer, e);
                            }
                        }
                    }
                }
            } catch (e) {}
        }

        disconnectedCallback() {
            if (this._subscription) { 
                this._subscription();
                this._subscription = null;
            }
        }

        onCustomWidgetBeforeUpdate(changedProperties) {
            if ("designMode" in changedProperties) {
                this._designMode = changedProperties["designMode"];
            }
        }

        onCustomWidgetAfterUpdate(changedProperties) {
            loadthis(this);
        }

        _firePropertiesChanged() {
            this.password = "";
            this.dispatchEvent(new CustomEvent("propertiesChanged", {
                detail: {
                    properties: {
                        password: this.password
                    }
                }
            }));
        }

        // SETTINGS
        get password() {
            return this._export_settings.password;
        }
        set password(value) {
            value = _password;
            this._export_settings.password = value;
        }

        static get observedAttributes() {
            return [
                "password"
            ];
        }

        attributeChangedCallback(name, oldValue, newValue) {
            if (oldValue != newValue) {
                this[name] = newValue;
            }
        }

    }
    customElements.define("com-fd-djaja-sap-sac-inputpassword", InputPassword);

    // UTILS
    function loadthis(that) {
        var that_ = that;
      
        let content = document.createElement('div');
        content.slot = "content";
        that_.appendChild(content);

        sap.ui.getCore().attachInit(function() {
            "use strict";

            //### Controller ###
            sap.ui.define([
                "jquery.sap.global",
                "sap/ui/core/mvc/Controller",
            ], function(jQuery, Controller) {
                "use strict";

                return Controller.extend("myView.Template", {
                    onButtonPress: function(oEvent) {
                        _password = oView.byId("passwordInput").getValue();
                        that._firePropertiesChanged();
                        console.log(_password);

                        this.settings = {};
                        this.settings.password = "";

                        that.dispatchEvent(new CustomEvent("onStart", {
                            detail: {
                                settings: this.settings
                            }
                        }));
                    } 
                });
            });

            //### THE APP: place the XMLView somewhere into DOM ###
            var oView  = sap.ui.xmlview({
                viewContent: jQuery(_shadowRoot.getElementById(_id + "_oView")).html(),
            });
            oView.placeAt(content);


            if (that_._designMode) {
                oView.byId("passwordInput").setEnabled(false);
            }
        });
    }

    function createGuid() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
            let r = Math.random() * 16 | 0,
                v = c === "x" ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }  
})();
