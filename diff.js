 Ext.apply(Ext.util.Format, function () {
        var dmp = new diff_match_patch();

        // inspired by diff_prettyHtml
        var toHtml = function (diffs, mode) {
            var html = [];
            var showInserts = (mode == "add" || "both");
            var showDels = (mode == "del" || "both");

            for (var x = 0; x < diffs.length; x++) {
                var op = diffs[x][0];    // Operation (insert, delete, equal)
                var text = diffs[x][1];  // Text of change.
                
                switch (op) {
                    case DIFF_INSERT:
                        html[x] = showInserts == true ? '<span class="inserted">' + text + '</span>' : '';
                        break;
                    case DIFF_DELETE:
                        html[x] = showDels == true ? '<span class="deleted">' + text + '</span>' : '';
                        break;
                    case DIFF_EQUAL:
                        html[x] = text;
                        break;
                }
            }

            return html.join('');
        };

        var diffFormatter = function(oldValue, newValue, mode) {
            var diffs = dmp.diff_main(Ext.util.Format.lineBreaks(oldValue), Ext.util.Format.lineBreaks(newValue));
            dmp.diff_cleanupSemantic(diffs);
            return toHtml(diffs, mode);
        }

        return {
                diff: diffFormatter,
                diffRenderer: function(against, mode) {
                    return function(value, meta, record) {
                        return diffFormatter(value, record.data[against], mode);
                    }
                }
            }
}());