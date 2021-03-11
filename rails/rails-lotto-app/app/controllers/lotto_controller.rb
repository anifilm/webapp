class LottoController < ApplicationController
    # lotto 폴더에 있는 파일 (index.html.erb)를 연결
    def index
        @lotto_number = [*1..45].sample(6)
        @ball_color = Array.new(6)

        for i in 0..5
            if (@lotto_number[i] < 10)
                @ball_color[i] = 1
            elsif (@lotto_number[i] < 20)
                @ball_color[i] = 2
            elsif (@lotto_number[i] < 30)
                @ball_color[i] = 3
            elsif (@lotto_number[i] < 40)
                @ball_color[i] = 4
            elsif (@lotto_number[i] < 50)
                @ball_color[i] = 5
            end
        end
    end
end
