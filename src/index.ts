import { IProperty } from "./propertyService";
import { RightmoveProperty } from "./rightmoveService";

let property = new RightmoveProperty(77934770);
property.get().then((info:IProperty) => {
    console.log(info);
});