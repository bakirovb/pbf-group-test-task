#include <nan.h>

void FibonacciSequence(const Nan::FunctionCallbackInfo<v8::Value>& info) {
  v8::Local<v8::Context> context = info.GetIsolate()->GetCurrentContext();

  static unsigned int x = 1;
	static unsigned int y = 0;

  v8::Local<v8::Number> num = Nan::New(y);

  x += y;
	y = x - y;

  info.GetReturnValue().Set(num);
}

void Init(v8::Local<v8::Object> exports) {
  v8::Local<v8::Context> context = exports->CreationContext();
  exports->Set(context,
               Nan::New("get_next_number").ToLocalChecked(),
               Nan::New<v8::FunctionTemplate>(FibonacciSequence)
                   ->GetFunction(context)
                   .ToLocalChecked());
}

NODE_MODULE(fibonacci, Init)
