const ko = require('nekodb')

let PreProps = {
  name: ko.String[50],
  desc: ko.String[50],
  is_actived: ko.Number.default(1),
  is_deleted: ko.Number.default(0),
  created_at: ko.Number.now(),
  updated_at: ko.Number.now()
}

let Note = {
  ...PreProps
}

G.zm({ Note })
