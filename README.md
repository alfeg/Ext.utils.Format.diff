Extjs.utils.Formatter.diff
==========================

Extjs wrapper for google js diff library http://code.google.com/p/google-diff-match-patch/

Sample usage

In XTemplates:
  
  ```
  '<td class="propertyValue">{NewValue:diff(values.OriginalValue, "add")}</td>',
  ```
As columns renderer:

  ```
  dataIndex: 'NewValue',
  renderer: Ext.util.Format.diffRenderer('OldValue', 'add')
  ```
  
There is an 'mode' argument. 'add' will highlight only inserted diffs, 'del' - deleted diffs
