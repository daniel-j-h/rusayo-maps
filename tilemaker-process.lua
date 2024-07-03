function node_function()
  return nil
end

function way_function()
  local building = Find("building")

  if building ~= "" then
    Layer("building", true)
  end
end
