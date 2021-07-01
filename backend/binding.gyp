{
  "targets": [
    {
      "target_name": "fibonacci",
      "sources": [ "src/nan/fibonacci.cc" ],
      "include_dirs": [
        "<!(node -e \"require('nan')\")"
      ]
    }
  ]
}
