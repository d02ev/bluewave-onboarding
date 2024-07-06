import React from "react";
import { Box, Button, InputAdornment, Tooltip, Chip } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Divider from "@mui/material/Divider";
import CustomTextField from "./CustomTextField/CustomTextField";

const TextFieldComponents = () => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 9, padding: "50px" }}>
      <Box sx={{ flex: 1, minWidth: 200 }}>
        <CustomTextField
          labelText="Website"
          labelFontWeight={600}
          inputHeight="34px"
          TextFieldWidth="320px"
          startAdornment=<>
            <InputAdornment position="start">http://</InputAdornment>
            <Divider sx={{ height: 34, m: 0.5 }} orientation="vertical" />
          </>
          helperText="This is a hint text to help user."
          endAdornment=<Tooltip title="This is a Tooltip" placement="top" arrow>
            <HelpOutlineIcon />
          </Tooltip>
        />

        <CustomTextField
          labelText="Email"
          labelFontWeight={600}
          inputHeight="34px"
          TextFieldWidth="320px"
          helperText="This is a hint text to help user."
          defaultValue="olivia@untitledui.com"
        />

        <CustomTextField
          labelText="Email"
          labelFontWeight={600}
          inputHeight="34px"
          TextFieldWidth="320px"
          defaultValue="olivia@untitledui.com"
          error
          helperText="This is an error message."
          endAdornment=<ErrorOutlineIcon
            style={{ color: "var(--border-error-solid)" }}
          />
        />

        <CustomTextField
          labelText="Email"
          labelFontWeight={600}
          inputHeight="34px"
          TextFieldWidth="320px"
          defaultValue="olivia@untitledui.com"
          helperText="This is a hint text to help user."
          endAdornment=<HelpOutlineIcon />
        />

        <CustomTextField
          labelText="Website"
          labelFontWeight={400}
          inputHeight="34px"
          TextFieldWidth="397px"
          defaultValue="www.untitledui.com"
          helperText="This is a hint text to help user."
          endAdornment=<>
            <HelpOutlineIcon />
            <Divider sx={{ height: 34, m: 0.5 }} orientation="vertical" />
            <Button variant="outline" startIcon={<ContentCopyIcon />}>
              Copy
            </Button>
          </>
        />
      </Box>
      <Box sx={{ flex: 1, minWidth: 300 }}>
        <CustomTextField
          labelText="Description"
          labelFontWeight={600}
          inputHeight="34px"
          TextFieldWidth="320px"
          placeholder="Enter a description..."
          helperText="This is a hint text to help user."
          multiline={true}
          rows={4}
        />
        <CustomTextField
          labelText="Description"
          labelFontWeight={600}
          inputHeight="34px"
          TextFieldWidth="320px"
          helperText="This is a hint text to help user."
          multiline={true}
          defaultValue="Marketing"
          rows={4}
          chips={[
            { label: "Design", onDelete: () => {} },
            { label: "Software", onDelete: () => {} },
          ]}
        />
        <CustomTextField
          labelText="Description"
          labelFontWeight={600}
          inputHeight="34px"
          TextFieldWidth="320px"
          placeholder="Enter a description..."
          helperText="This is an error message."
          multiline={true}
          rows={4}
          error
        />
      </Box>
    </Box>
  );
};

export default TextFieldComponents;
