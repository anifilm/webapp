Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # 여기에서 라우팅 될 주소와 뷰 파일을 연결
  get '/', to: 'lotto#index'
end
