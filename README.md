Extjs.utils.Formatter.diff
==========================

Extjs wrapper for google js diff library http://code.google.com/p/google-diff-match-patch/

Sample usage

In XTemplates:
  
  ```
  '<td class="propertyValue">{OldValue:diff(values.NewValue, "add")}</td>',
  ```
As columns renderer:

  ```
  dataIndex: 'OldValue',
  renderer: Ext.util.Format.diffRenderer('NewValue', 'add')
  ```
  
There is an 'mode' argument. 'add' will highlight only inserted diffs, 'del' - deleted diffs
