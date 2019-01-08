import React from "react";
import { storiesOf } from "@storybook/react";
import Autosuggest from "../Autosuggest/Autosuggest";

storiesOf("Autosuggest", module).add("with postal code", () => <Autosuggest />);
